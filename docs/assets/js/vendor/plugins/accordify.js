// #########################################################################
// # Settings and default containers for ease of use (and standardization) #
// #########################################################################
/**
 * Placeholder object for string formatting in pre-render replacement
 * @type {{file: string, name: string, linkName: string}}
 */
const placeholder = {
    name: "{{name}}",
    linkName: "{{linkName}}",
    file: "{{file}}",
}

/**
 * The main object, holding information shared across parts.
 *
 * This object exists (and is bound globally) so that configurations can easily be applied
 *
 * @type {{regex: RegExp, prefix: string, constructReplacement: (function(*=, *): string), placeholder: {file: string, name: string, linkName: string}, postfix: string, rawReplacement: string, properties: {prerenderComments: boolean}}}
 */
const Accordify = {
    placeholder: placeholder,
    rawReplacement: "## " + placeholder.name + " + \n\n[" + placeholder.file + "](" + placeholder.file + " ':include')\n[comment]: <> (End of Accordion " + placeholder.name + ")",
    prefix: "<!-- accordify-inline:",
    postfix: " -->",
    regex: new RegExp(`<!-- accordify-inline:.* -->`, "g"),
    properties: {
        prerenderComments: true,
        selectors: ['h1','h2','h3','h4','h5','h6'],
        debug: false
    },
    constructReplacement: (contents, rawReplacement) => {
        if (!Array.isArray(contents)) {
            throw Error("typeof " + contents + " does not match " + typeof contents)
        }

        const file = contents[0]
        const name = contents.length >= 2 ? contents[1] : contents[0]

        return rawReplacement.replace(placeholder.name, name)
            .replaceAll(placeholder.file, file)
    }
}

// #####################################################################
// # Pre-render comments, pointing to a file into the accordify layout #
// #####################################################################
/**
 * Will prerender comments according to the <!-- accordify-inline:<file><optional: |<title>> --> format
 *
 * This method will prerender these comments to adhere to the default schema of an accordion (as described in the documentation).
 *
 * Resulting will be an accordion, which inlines a whole different file, like this:
 *
 * ```markdown
 * ## <title || filename> +
 *
 * [file](file :'include')
 * ```
 *
 * @param content the raw markdown
 * @returns {string} the pre rendered markdown, with all respective comments translated to accordions
 */
const accordifyInlinePrerender = (content) => {
    let newContent = content
    if (newContent.search(Accordify.regex) !== -1) {
        newContent = newContent.replaceAll(Accordify.regex, substring => {
            let rawName = substring.replace(Accordify.prefix, "")
            rawName = rawName.replace(Accordify.postfix, "")

            const nameContents = rawName.split("|")

            if(Accordify.properties.debug) {
                console.debug("[Prerender] rendering", nameContents)
            }

            return Accordify.constructReplacement(nameContents, Accordify.rawReplacement)
        })
    }

    return newContent;
}

// #####################################################
// # Actually translate the markdown entries into html #
// #####################################################
/**
 * Renders the actual accordions
 */
const accordifyRenderAccordions = () => {
    let selected = []
    Accordify.properties.selectors.forEach(selector => {
        const found = document.querySelectorAll(selector);
        found.forEach(header => selected.push(header))
        if(Accordify.properties.debug) {
            console.debug("Selector results", selector, found)
        }
    })

    let headerAside;
    let titleSpan;
    let plusSpan;

    let plusSpanWrapper;
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].firstChild.firstChild.textContent.endsWith(" +")) {
            if(Accordify.properties.debug) {
                console.debug("Found accordion relevant element (because it ends on \" +\")", selected[i])
            }
            selected[i].classList.add('accordion')
            selected[i].classList.add(Accordify.properties.theme)

            headerAside = document.querySelector(`a[title='` + selected[i].firstChild.firstChild.textContent + `']`);
            headerAside.href = headerAside.href.substring(0, headerAside.href.length - 1);
            headerAside.setAttribute('title', headerAside.getAttribute('title').substring(0, headerAside.getAttribute('title').length - 2));
            headerAside.textContent = headerAside.textContent.substring(0, headerAside.textContent.length - 2);

            selected[i].id = selected[i].id.substring(0, selected[i].id.length - 1);
            selected[i].firstChild.href = selected[i].firstChild.href.substring(0, selected[i].firstChild.href.length - 1);
            selected[i].firstChild.setAttribute('data-id', selected[i].firstChild.getAttribute('data-id').substring(0, selected[i].firstChild.getAttribute('data-id').length - 1));

            titleSpan = selected[i].firstChild.firstChild;
            titleSpan.textContent = titleSpan.textContent.substring(0, titleSpan.textContent.length - 2)

            plusSpan = document.createElement('span');
            plusSpan.textContent = '+';
            plusSpan.classList.add('plus');
            plusSpan.classList.add(Accordify.properties.theme);
            plusSpan.dataset.opentrigger = "1"

            plusSpanWrapper = document.createElement('span')
            plusSpanWrapper.classList.add('plus-container');
            plusSpanWrapper.classList.add(Accordify.properties.theme);
            plusSpanWrapper.dataset.opentrigger = "1"
            plusSpanWrapper.appendChild(plusSpan)

            titleSpan.insertAdjacentElement('afterend', plusSpanWrapper);
        }
    }

    const accordions = document.querySelectorAll('.accordion');

    let currentHeaderType;
    let panelDiv;
    let panelContent;
    let panelContents;

    for (let i = 0; i < accordions.length; i++) {
        panelContents = [];
        currentHeaderType = accordions[i].tagName;
        panelDiv = document.createElement('div');
        panelContent = accordions[i];
        panelDiv.classList.add('panel');
        panelDiv.classList.add(Accordify.properties.theme);
        while (panelContent) {
            panelContent = panelContent.nextElementSibling;
            if (panelContent && panelContent.tagName !== currentHeaderType) {
                panelContents.push(panelContent);
            } else {
                break;
            }
        }
        for (let j = 0; j < panelContents.length; j++) {
            panelDiv.append(panelContents[j])
        }
        accordions[i].insertAdjacentElement('afterend', panelDiv);
    }

    if(Accordify.properties.debug) {
        console.debug("Successfully translated " + accordions.length + " accordions")
    }
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("opened");

            this.nextElementSibling.classList.toggle("opened");
            this.querySelectorAll("[data-opentrigger=\"1\"]").forEach(plusSpan => plusSpan.classList.toggle("opened"))
        });
    }
}

/**
 * Tries to read and set properties, based on the window.$docsify variable
 *
 * The sub-namespace must be accordify.
 */
const accordifySetProperties = () => {
    if (window.$docsify !== undefined && window.$docsify.accordify !== undefined) {
        const setProperties = window.$docsify.accordify
        /**
         * Tries to update a specific property, base on the provided properties.
         *
         * This method will also try to ensure type-safety. I.e. the variable type.
         *
         * @param name the name of the variable that should be checked for and then potentially overwritten
         * @param type the expected type of the variable (must be checkable by "typeof")
         */
        const setProperty = (name, type) => {
            if(setProperties[name] !== undefined) {
                if(typeof setProperties[name] === type) {
                    Accordify.properties[name] = setProperties[name]
                } else {
                    console.warn("IGNORING SET PROPERTY " + name ,
                        "Found illegal type for the property \"" + name + "\". Expected " + type + " but got " + typeof setProperties[name])
                }
            }
        }

        // Set all the supported properties
        setProperty("prerenderComments", "boolean")
        setProperty("debug", "boolean")
        setProperty("relevantHeaders", "string")
    }
}

// #############################################################################
// # Register the inline prerender and the accordion render action accordingly #
// #############################################################################
/**
 * The main Accordify plugin, that will automatically be passed down to Docsify
 *
 * @param hook as the hook container provided by Docsify
 * @param vm as the vm provided by Docsify
 */
const AccordifyPlugin = (hook, vm) => {
    accordifySetProperties()
    if (Accordify.properties.prerenderComments) {
        hook.beforeEach(accordifyInlinePrerender)
    }
    hook.doneEach(accordifyRenderAccordions);
}

// #######################################################################
// # Only render the accordions (still here for backwards compatibility) #
// #######################################################################
/**
 * @deprecated please refrain from using this. Instead, simply add the source
 * @param hook
 * @param vm
 */
function loadAccordions(hook, vm) {
    hook.doneEach(accordifyRenderAccordions)
}

// ####################################################
// # Try to automatically register the docsify plugin #
// ####################################################
if (window.$docsify && window.$docsify.plugins) {
    window.$docsify.plugins.push(AccordifyPlugin)
} else if (window.$docsify) {
  window.$docsify.plugins = [AccordifyPlugin]
} else {
    console.warn("You are using an outdated version of Accordify. Please checkout the github page for further information.")
}