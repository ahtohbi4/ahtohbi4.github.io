import React from 'react';

import Menu from '../Menu';

import './styles.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div>Alexandr Antonov</div>

        <Menu />
      </div>
    </aside>
  );
}
