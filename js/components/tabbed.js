const selectors = {
  parent: '[data-tab-parent]',
  trigger: '[data-tab-trigger]',
  content: '[data-tab-content]',
  activeClass: 'is__active'
};

const { parent: tabParentSelector, trigger: tabTrigger, content: tabContent, activeClass } = selectors || {};

export default (sectionParent) => {
  const tabbedParent = document.querySelector(tabParentSelector);
  const tabbedHeaders = tabbedParent?.querySelectorAll(tabTrigger) || [];
  const tabbedContent = tabbedParent?.querySelectorAll(tabContent) || [];

  const setActive = (index, active) => {
    if (active) {
      tabbedHeaders[index].classList.add(activeClass)
      tabbedContent[index].classList.add(activeClass)
    }
    else {
      tabbedHeaders[index].classList.remove(activeClass)
      tabbedContent[index].classList.remove(activeClass)
    }
  };

  tabbedHeaders.forEach((tab) => {
    tab.addEventListener('click', () => {
      const activeTab = sectionParent.querySelector(`${tabTrigger}.${activeClass}`);
      const index = tab.dataset.index;
      if (tab.classList.contains(activeClass)) {
        return;
      }
      if (activeTab) {
        const activeIndex = activeTab.dataset.index;
        setActive(activeIndex, false)
      }

      setActive(index, true);
    })
  })
}