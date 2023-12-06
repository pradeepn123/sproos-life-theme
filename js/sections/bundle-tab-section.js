import accordions from "JsComponents/accordions";
import tabbs from "JsComponents/tabbed";

export default () => {
    const sectionParent = document.querySelector('[data-section-parent]');
    if(sectionParent) {
        accordions(sectionParent);
        tabbs(sectionParent);
    }
}

