import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Activity, Grid, Layers, FileText } from 'lucide-react';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex shrink-0 items-center whitespace-nowrap px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`
    }
  >
    <span className="mr-3">{icon}</span>
    {label}
  </NavLink>
);

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-50 overflow-hidden font-sans md:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full flex-shrink-0 flex-col bg-gray-900 text-white md:w-64">
        <div className="border-b border-gray-800 p-4 md:p-6">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            SRBench
          </h1>
          <p className="mt-1 hidden text-xs text-gray-500 md:block">Exploring Super-Resolution Strategies for Spatial Transcriptomics</p>
        </div>
        
        <nav className="flex gap-2 overflow-x-auto px-3 py-2 md:block md:flex-1 md:space-y-2 md:overflow-y-auto md:px-4 md:py-6">
          <NavItem to="/study-design" icon={<FileText size={20} />} label="Platform Design" />
          <NavItem to="/dataset-overview" icon={<LayoutDashboard size={20} />} label="Dataset Overview" />
          <NavItem to="/metric-vis" icon={<Activity size={20} />} label="Metric Visualization" />
          <NavItem to="/out-of-sample" icon={<Grid size={20} />} label="Out-of-sample Prediction" />
          <NavItem to="/diff-resolution" icon={<Layers size={20} />} label="Initial Resolution" />         
        </nav>

        <div className="hidden border-t border-gray-800 p-4 text-center text-xs text-gray-500 md:block">
           © 2026 SRBench Project
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative min-h-0 min-w-0 flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
