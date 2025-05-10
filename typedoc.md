[96m[info][0m Loaded plugin typedoc-plugin-markdown
typedoc path/to/entry.ts

Options:
 --alwaysCreateEntryPointModule               When set, TypeDoc will always create a `Module` for entry points, even if only one is provided
 --anchorPrefix                               Custom anchor prefix to add to anchor links.
 --basePath                                   Specifies the base path to be used when displaying file paths
 --blockTags                                  Block tags which TypeDoc should recognize when parsing comments
 --blockTagsPreserveOrder                     Specifies comment block tags that should preserve their position.
 --cacheBust                                  Include the generation time in links to static assets
 --cascadedModifierTags                       Modifier tags which should be copied to all children of the parent reflection
 --categorizeByGroup                          Specify whether categorization will be done at the group level
 --categoryOrder                              Specify the order in which categories appear. * indicates the relative order for categories not in the list
 --classPropertiesFormat                      Sets the format of property groups for classes.
 --cleanOutputDir                             If set, TypeDoc will remove the output directory before writing output
 --cname                                      Set the CNAME file text, it's useful for custom domains on GitHub Pages
 --commentStyle                               Determines how TypeDoc searches for comments
 --customCss                                  Path to a custom CSS file to for the theme to import
 --customFooterHtml                           Custom footer after the TypeDoc link
 --customFooterHtmlDisableWrapper             If set, disables the wrapper element for customFooterHtml
 --customJs                                   Path to a custom JS file to import
 --darkHighlightTheme                         Specify the code highlighting theme in dark mode
 --defaultCategory                            Specify the default category for reflections without a category
 --disableGit                                 Assume that all can be linked to with the sourceLinkTemplate, sourceLinkTemplate must be set if this is enabled. {path} will be rooted at basePath
 --disableSources                             Disable setting the source of a reflection when documenting it
 --emit                                       Specify what TypeDoc should emit, 'docs', 'both', or 'none'
 --entryFileName                              The file name of the entry page.
 --entryModule                                The name of a module that should act as the root page for the documentation.
 --entryPoints                                The entry points of your documentation
 --entryPointStrategy                         The strategy to be used to convert entry points into documentation modules
 --enumMembersFormat                          Sets the format of enumeration members.
 --exclude                                    Define patterns to be excluded when expanding a directory that was specified as an entry point
 --excludeCategories                          Exclude symbols within this category from the documentation
 --excludeExternals                           Prevent externally resolved symbols from being documented
 --excludeGroups                              @deprecated This option has been renamed hideGroupHeadings to better reflect its purpose.
 --excludeInternal                            Prevent symbols that are marked with @internal from being documented
 --excludeNotDocumented                       Prevent symbols that are not explicitly documented from appearing in the results
 --excludeNotDocumentedKinds                  Specify the type of reflections that can be removed by excludeNotDocumented
 --excludePrivate                             Ignore private variables and methods, defaults to true.
 --excludeProtected                           Ignore protected variables and methods
 --excludeReferences                          If a symbol is exported multiple times, ignore all but the first export
 --excludeScopesInPaths                       Exclude writing @ scope directories in paths.
 --excludeTags                                Remove the listed block/modifier tags from doc comments
 --expandObjects                              Expand objects inside declarations.
 --expandParameters                           Expand parameters in signature parentheses to display type information.
 --externalPattern                            Define patterns for files that should be considered being external
 --externalSymbolLinkMappings                 Define custom links for symbols not included in the documentation
 --favicon                                    Path to favicon to include as the site icon
 --fileExtension                              Specify the file extension for generated output files.
 --flattenOutputFiles                         Flatten output files to a single directory.
 --formatWithPrettier                         Apply additional output formatting with Prettier.
 --githubPages                                Generate a .nojekyll file to prevent 404 errors in GitHub Pages. Defaults to `true`
 --gitRemote                                  Use the specified remote for linking to GitHub/Bitbucket source files. Has no effect if disableGit or disableSources is set
 --gitRevision                                Use specified revision instead of the last revision for linking to GitHub/Bitbucket source files. Has no effect if disableSources is set
 --groupOrder                                 Specify the order in which groups appear. * indicates the relative order for groups not in the list
 --groupReferencesByType                      If set, references will be grouped with the type they refer to rather than in a 'References' group
 --headings                                   Determines which optional headings are rendered
 --help                                       Print this message
 --hideBreadcrumbs                            Do not print breadcrumbs.
 --hideGenerator                              Do not print the TypeDoc link at the end of the page
 --hideGroupHeadings                          Excludes grouping by kind so all members are rendered at the same level.
 --hidePageHeader                             Do not print page header.
 --hidePageTitle                              Do not print page title.
 --highlightLanguages                         Specify the languages which will be loaded to highlight code when rendering
 --hostedBaseUrl                              Specify a base URL to be used in generating a sitemap.xml in our output folder and canonical links. If not specified, no sitemap will be generated
 --html                                       Specify the location where html documentation should be written to.
 --ignoredHighlightLanguages                  Specify languages which will be accepted as valid highlight languages, but will not be highlighted at runtime
 --includeHierarchySummary                    If set, a reflections hierarchy summary will be rendered to a summary page. Defaults to `true`
 --includeVersion                             Add the package version to the project name
 --indexFormat                                Sets the format of index items.
 --inlineTags                                 Inline tags which TypeDoc should recognize when parsing comments
 --intentionallyNotDocumented                 A list of full reflection names which should not produce warnings about not being documented
 --intentionallyNotExported                   A list of types which should not produce 'referenced but not documented' warnings
 --interfacePropertiesFormat                  Sets the format of property groups for interfaces.
 --jsDocCompatibility                         Sets compatibility options for comment parsing that increase similarity with JSDoc comments
 --json                                       Specify the location and filename a JSON file describing the project is written to
 --kindSortOrder                              Specify the sort order for reflections when 'kind' is specified
 --lang                                       Sets the language to be used in generation and in TypeDoc's messages
 --lightHighlightTheme                        Specify the code highlighting theme in light mode
 --logLevel                                   Specify what level of logging should be used
 --markdown                                   Specify the location the documentation for the default output should be written to. The default output type may be changed by plugins.
 --markdownLinkExternal                       Specifies that http[s]:// links in comments and markdown files should be treated as external links to be opened in a new tab
 --maxTypeConversionDepth                     Set the maximum depth of types to be converted
 --membersWithOwnFile                         Determines which members are exported to their own file.
 --mergeReadme                                Appends the documentation index page to the readme page.
 --modifierTags                               Modifier tags which TypeDoc should recognize when parsing comments
 --modulesFileName                            The file name of the separate modules / index page.
 --name                                       Set the name of the project that will be used in the header of the template
 --navigation                                 Determines how the navigation sidebar is organized
 --navigationLeaves                           Branches of the navigation tree which should not be expanded
 --navigationLinks                            Defines links to be included in the header
 --navigationModel                            @deprecated This option has been deprecated in favour of TypeDoc `navigation` option.
 --notRenderedTags                            Tags which will be preserved in doc comments, but not rendered when creating output
 --options                                    Specify a json option file that should be loaded. If not specified TypeDoc will look for 'typedoc.json' in the current directory
 --out                                        Specify the location the documentation for the default output should be written to. The default output type may be changed by plugins.
 --outputFileStrategy                         @deprecated Deprecated in favour of `--router`.
 --packagesRequiringDocumentation             A list of packages that must be documented
 --parametersFormat                           Sets the format of parameter and type parameter groups.
 --plugin                                     Specify the npm plugins that should be loaded. Omit to load all installed plugins
 --preserveAnchorCasing                       Preserve anchor casing when generating link to symbols.
 --preserveLinkText                           If set, @link tags without link text will use the text content as the link. If not set, will use the target reflection name
 --preserveWatchOutput                        If set, TypeDoc will not clear the screen between compilation runs
 --prettierConfigFile                         Specify a custom Prettier configuration file location.
 --pretty                                     Specify whether the output JSON should be formatted with tabs
 --projectDocuments                           Documents which should be added as children to the root of the generated documentation. Supports globs to match multiple files
 --propertiesFormat                           @deprecated  This option has been deprecated in favour of `--interfacePropertiesFormat` and `--classPropertiesFormat`.
 --propertyMembersFormat                      Sets the format of style for property members for interfaces and classes.
 --publicPath                                 Specify the base path for all urls.
 --readme                                     Path to the readme file that should be displayed on the index page. Pass `none` to disable the index page and start the documentation on the globals page
 --requiredToBeDocumented                     A list of reflection kinds that must be documented
 --router                                     Specify the router name to use to determine file names in the documentation
 --sanitizeComments                           Sanitize HTML and JSX inside JsDoc comments.
 --searchInComments                           If set, the search index will also include comments. This will greatly increase the size of the search index
 --searchInDocuments                          If set, the search index will also include documents. This will greatly increase the size of the search index
 --showConfig                                 Print the resolved configuration and exit
 --sidebarLinks                               Defines links to be included in the sidebar
 --skipErrorChecking                          Do not run TypeScript's type checking before generating docs
 --sluggerConfiguration                       Determines how anchors within rendered HTML are determined.
 --sort                                       Specify the sort strategy for documented values
 --sortEntryPoints                            If set, entry points will be subject to the same sorting rules as other reflections
 --sourceLinkExternal                         Specifies that source links should be treated as external links to be opened in a new tab
 --sourceLinkTemplate                         Specify a link template to be used when generating source urls. If not set, will be automatically created using the git remote. Supports {path}, {line}, {gitRevision} placeholders
 --suppressCommentWarningsInDeclarationFiles  Prevents warnings due to unspecified tags from being reported in comments within .d.ts files.
 --tableColumnSettings                        Control how table columns are configured and displayed.
 --theme                                      Specify the theme name to render the documentation with
 --titleLink                                  Set the link the title in the header points to. Defaults to the documentation homepage
 --treatValidationWarningsAsErrors            If set, warnings emitted during validation will be treated as errors. This option cannot be used to disable treatWarningsAsErrors for validation warnings
 --treatWarningsAsErrors                      If set, all warnings will be treated as errors
 --tsconfig                                   Specify a TypeScript config file that should be loaded. If not specified TypeDoc will look for 'tsconfig.json' in the current directory
 --typeAliasPropertiesFormat                  Sets the format of style for type alias properties.
 --typeDeclarationFormat                      Sets the format of style for type declaration members.
 --typeDeclarationVisibility                  Set the visibility level for type declaration documentation.
 --typePrintWidth                             Width at which to wrap code to a new line when rendering a type
 --useCodeBlocks                              Wraps signatures and declarations in code blocks.
 --useFirstParagraphOfCommentAsSummary        If set and no @summary tag is specified, TypeDoc will use the first paragraph of comments as the short summary in the module/namespace view
 --useHostedBaseUrlForAbsoluteLinks           If set, TypeDoc will produce absolute links to pages on your site using the hostedBaseUrl option
 --useHTMLAnchors                             Add HTML anchors to page headings.
 --useHTMLEncodedBrackets                     Use HTML encoded entities for angle brackets.
 --useTsLinkResolution                        Use TypeScript's link resolution when determining where @link tags point. This only applies to JSDoc style comments
 --validation                                 Specify which validation steps TypeDoc should perform on your generated documentation
 --version                                    Print TypeDoc's version
 --watch                                      Watch files for changes and rebuild docs on change

Supported highlighting languages:
1c                  1c-query            abap                actionscript-3      
ada                 adoc                angular-html        angular-ts          
apache              apex                apl                 applescript         
ara                 asciidoc            asm                 astro               
awk                 ballerina           bash                bat                 
batch               be                  beancount           berry               
bibtex              bicep               blade               bsl                 
c                   c#                  c++                 cadence             
cairo               cdc                 clarity             clj                 
clojure             closure-templates   cmake               cmd                 
cobol               codeowners          codeql              coffee              
coffeescript        common-lisp         console             coq                 
cpp                 cql                 crystal             cs                  
csharp              css                 csv                 cts                 
cue                 cypher              d                   dart                
dax                 desktop             diff                docker              
dockerfile          dotenv              dream-maker         edge                
elisp               elixir              elm                 emacs-lisp          
erb                 erl                 erlang              f                   
f#                  f03                 f08                 f18                 
f77                 f90                 f95                 fennel              
fish                fluent              for                 fortran-fixed-form  
fortran-free-form   fs                  fsharp              fsl                 
ftl                 gdresource          gdscript            gdshader            
genie               gherkin             git-commit          git-rebase          
gjs                 gleam               glimmer-js          glimmer-ts          
glsl                gnuplot             go                  gql                 
graphql             groovy              gts                 hack                
haml                handlebars          haskell             haxe                
hbs                 hcl                 hjson               hlsl                
hs                  html                html-derivative     http                
hxml                hy                  imba                ini                 
jade                java                javascript          jinja               
jison               jl                  js                  json                
json5               jsonc               jsonl               jsonnet             
jssm                jsx                 julia               kotlin              
kql                 kt                  kts                 kusto               
latex               lean                lean4               less                
liquid              lisp                lit                 llvm                
log                 logo                lua                 luau                
make                makefile            markdown            marko               
matlab              md                  mdc                 mdx                 
mediawiki           mermaid             mips                mipsasm             
mmd                 mojo                move                mts                 
nar                 narrat              nextflow            nf                  
nginx               nim                 nix                 nu                  
nushell             objc                objective-c         objective-cpp       
ocaml               pascal              perl                perl6               
php                 plsql               po                  polar               
postcss             pot                 potx                powerquery          
powershell          prisma              prolog              properties          
proto               protobuf            ps                  ps1                 
pug                 puppet              purescript          py                  
python              ql                  qml                 qmldir              
qss                 r                   racket              raku                
razor               rb                  reg                 regex               
regexp              rel                 riscv               rs                  
rst                 ruby                rust                sas                 
sass                scala               scheme              scss                
sdbl                sh                  shader              shaderlab           
shell               shellscript         shellsession        smalltalk           
solidity            soy                 sparql              spl                 
splunk              sql                 ssh-config          stata               
styl                stylus              svelte              swift               
system-verilog      systemd             talon               talonscript         
tasl                tcl                 templ               terraform           
tex                 text                tf                  tfvars              
toml                ts                  ts-tags             tsp                 
tsv                 tsx                 turtle              twig                
txt                 typ                 typescript          typespec            
typst               v                   vala                vb                  
verilog             vhdl                vim                 viml                
vimscript           vue                 vue-html            vy                  
vyper               wasm                wenyan              wgsl                
wiki                wikitext            wit                 wl                  
wolfram             xml                 xsl                 yaml                
yml                 zenscript           zig                 zsh                 
文言                  

Supported highlighting themes:
andromeeda                  aurora-x                    
ayu-dark                    catppuccin-frappe           
catppuccin-latte            catppuccin-macchiato        
catppuccin-mocha            dark-plus                   
dracula                     dracula-soft                
everforest-dark             everforest-light            
github-dark                 github-dark-default         
github-dark-dimmed          github-dark-high-contrast   
github-light                github-light-default        
github-light-high-contrast  gruvbox-dark-hard           
gruvbox-dark-medium         gruvbox-dark-soft           
gruvbox-light-hard          gruvbox-light-medium        
gruvbox-light-soft          houston                     
kanagawa-dragon             kanagawa-lotus              
kanagawa-wave               laserwave                   
light-plus                  material-theme              
material-theme-darker       material-theme-lighter      
material-theme-ocean        material-theme-palenight    
min-dark                    min-light                   
monokai                     night-owl                   
nord                        one-dark-pro                
one-light                   plastic                     
poimandres                  red                         
rose-pine                   rose-pine-dawn              
rose-pine-moon              slack-dark                  
slack-ochin                 snazzy-light                
solarized-dark              solarized-light             
synthwave-84                tokyo-night                 
vesper                      vitesse-black               
vitesse-dark                vitesse-light               
