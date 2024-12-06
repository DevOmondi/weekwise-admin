"use client";
import React, { useState } from "react";

import {
  Brain,
  Settings,
  Users,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import RenderUsersSection from "./components/RenderUsersSection";
import RenderOverviewSection from "./components/RenderOverviewSection";
// import RenderMessagesSection from "./components/RenderMessagesSection";
import RenderPromptsSection from "./components/RenderPromptsSection";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navigationItems = [
    {
      id: "overview",
      label: "Overview",
      icon: <DollarSign className="w-4 h-4" />,
    },
    { id: "users", label: "Users", icon: <Users className="w-4 h-4" /> },
    {
      id: "messages",
      label: "Messages",
      icon: <MessageSquare className="w-4 h-4" />,
    },
    { id: "prompts", label: "Prompts", icon: <Brain className="w-4 h-4" /> },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-64 h-full bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">AI Coach Admin</h1>
        </div>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="ml-64 p-8">
        {activeSection === "overview" && <RenderOverviewSection />}
        {activeSection === "users" && <RenderUsersSection />}
        {/* {activeSection === "messages" && <RenderMessagesSection />} */}
        {activeSection === "prompts" && <RenderPromptsSection />}
      </div>
    </div>
  );
};

export default AdminDashboard;
