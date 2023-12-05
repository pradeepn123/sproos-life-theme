const selectors = {
    parent: '[data-accordion-parent]',
    trigger: '[data-accordion-trigger]',
    content: '[data-accordion-content]',
    activeClass: 'active'
  };
  
  const { parent: accordionParentSelector, trigger: accordionTrigger, content: accordionContent, activeClass } = selectors || {};
  
  const updateHeight = (content, open) => {
    open ? (content.style.maxHeight = `${content.scrollHeight}px`) : (content.style.maxHeight = 0);
  };
  
  const setActive = (content, active) => {
    active ? content.classList.add(activeClass) : content.classList.remove(activeClass);
  };
  
  export default (sectionParent) => {
    const accordionParents = sectionParent.querySelectorAll(accordionParentSelector);
  
    accordionParents.forEach((parent, index) => {
      const accordionHeaders = parent.querySelector(accordionTrigger);
      const accordionContentEl = parent.querySelector(accordionContent);
  
      accordionHeaders.addEventListener('click', () => {
        if (parent.classList.contains(activeClass)) {
          setActive(parent, false);
          updateHeight(accordionContentEl, false);
          return;
        }
  
        const activeAccordionParent = sectionParent.querySelector(`${accordionParentSelector}.${activeClass}`);
        if (activeAccordionParent) {
          const activeAccordionContent = activeAccordionParent.querySelector(accordionContent);
          setActive(activeAccordionParent, false);
          updateHeight(activeAccordionContent, false);
        }
  
        parent.classList.add(activeClass);
        setActive(parent, true);
        updateHeight(accordionContentEl, true);
      });
  
      // Open the first accordion by default
      if (index === 0) {
        parent.classList.add(activeClass);
        setActive(parent, true);
        updateHeight(accordionContentEl, true);
      }
    });
  };
  