/**
 *
 * Button fragment that takes an icon,title and a styles object with each key targeting icon and button Tailwind classes
 * @returns
 */
function buttonFragment({ icon, title, styles }) {
  return `<div class='inline-flex p-0 space-x-2'>
    <span class=${styles.icon}>${icon}</span>
    <button class=${styles.button}>${title}</button>
    </div>`;
}

module.exports = buttonFragment;
