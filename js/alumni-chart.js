// Derive every chart value from the same alumni records used by the team page.
(() => {
  const members = JSON.parse(document.getElementById('alumni-chart-data').textContent);
  const categories = ['字节跳动', '百度', '阿里巴巴', '腾讯', '华为', '美团', '智谱', '继续深造', '其他单位'];
  const colors = ['#3379b7', '#57a6c1', '#e5a24a', '#7a78b6', '#c97888', '#66a58b', '#b5a35e', '#84afcf', '#c2cbd4'];
  const yearSelect = document.getElementById('alumni-year');
  const svg = document.getElementById('alumni-chart');
  const legend = document.getElementById('alumni-legend');
  const breakdown = document.getElementById('alumni-breakdown');

  function render() {
    const selected = members.filter(member => yearSelect.value === 'all' || String(member.year) === yearSelect.value);
    const groups = new Map(categories.map(name => [name, 0]));
    const companies = new Map();
    for (const member of selected) {
      const company = member.company;
      companies.set(company, (companies.get(company) || 0) + 1);
      const category = member.destination_type === 'study' ? '继续深造' : categories.includes(company) ? company : '其他单位';
      groups.set(category, groups.get(category) + 1);
    }
    svg.replaceChildren();
    legend.replaceChildren();
    breakdown.replaceChildren();
    document.getElementById('alumni-total').textContent = selected.length;
    let offset = 0;
    const descriptions = [];
    categories.forEach((name, index) => {
      const count = groups.get(name);
      if (!count) return;
      const percent = count / selected.length * 100;
      const description = `${name}：${count} 人 · ${percent.toFixed(1)}%`;
      descriptions.push(description);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      for (const [key, value] of Object.entries({cx: 120, cy: 120, r: 92, fill: 'none', stroke: colors[index], 'stroke-width': 35, pathLength: 100, 'stroke-dasharray': `${percent} ${100 - percent}`, 'stroke-dashoffset': -offset, transform: 'rotate(-90 120 120)'})) {
        circle.setAttribute(key, value);
      }
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = description;
      circle.append(title);
      svg.append(circle);
      offset += percent;
      const item = document.createElement('li');
      const dot = document.createElement('i');
      dot.style.background = colors[index];
      dot.setAttribute('aria-hidden', 'true');
      const label = document.createElement('span');
      label.textContent = name;
      const value = document.createElement('b');
      value.textContent = `${count} 人 · ${percent.toFixed(1)}%`;
      item.append(dot, label, value);
      legend.append(item);
    });
    svg.setAttribute('aria-label', `共 ${selected.length} 人。${descriptions.join('；')}`);
    for (const [company, count] of [...companies.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'))) {
      const item = document.createElement('div');
      item.textContent = `${company} · ${count} 人`;
      breakdown.append(item);
    }
  }
  yearSelect.addEventListener('change', render);
  render();
})();
