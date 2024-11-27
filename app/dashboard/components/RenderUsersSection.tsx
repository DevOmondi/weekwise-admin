"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define users data
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    goal: "Run a marathon",
    progress: "6/52",
    subscription: {
      status: "active",
      startDate: "2024-01-15",
      nextBilling: "2025-01-15",
    },
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.c@example.com",
    status: "paused",
    goal: "Write a novel",
    progress: "12/52",
    subscription: {
      status: "paused",
      startDate: "2024-01-01",
      nextBilling: "2025-01-01",
    },
  },
];

const RenderUsersSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>View and manage user accounts</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">📊 Export Users</Button>
            <Button>➕ Add User</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
            <Input
              placeholder="Search users by name or email..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium text-gray-600">
                  User
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  Goal
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  Progress
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  Subscription
                </th>
                <th className="text-left p-4 font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-600">
                        ✉️ {user.email}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{user.goal}</td>
                  <td className="p-4">{user.progress}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status === "active" ? "● " : "○ "}
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div>
                      <div className="text-sm font-medium">
                        Next billing: {user.subscription.nextBilling}
                      </div>
                      <div className="text-xs text-gray-600">
                        Since: {user.subscription.startDate}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RenderUsersSection;
