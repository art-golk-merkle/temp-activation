export default function init(el) {
  const items = [...el.querySelectorAll(':scope > div')];

  items.forEach((item) => {
    const children = [...item.children];
    if (children.length < 2) return;

    const question = children[0];
    const answer = children.slice(1);

    item.classList.add('accordion-item');
    question.classList.add('accordion-question');
    answer.forEach((child) => child.classList.add('accordion-answer'));

    const button = document.createElement('button');
    button.className = 'accordion-button';
    button.setAttribute('aria-expanded', 'false');

    const questionContent = question.innerHTML;
    question.innerHTML = '';
    question.append(button);
    button.innerHTML = questionContent;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('expanded');
    });
  });
}
