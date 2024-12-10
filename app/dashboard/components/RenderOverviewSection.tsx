"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Users,
  MessageSquare,
  AlertCircle,
  DollarSign,
  //   Search,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { fetchUsersCount } from "@/utils/fetchUsersCount";

// Combined users and revenue data
const performanceData = [
  { month: "Jan", users: 1200, revenue: 40000 },
  { month: "Feb", users: 1500, revenue: 50000 },
  { month: "Mar", users: 1800, revenue: 60000 },
  { month: "Apr", users: 2200, revenue: 70000 },
  { month: "May", users: 2600, revenue: 80000 },
  { month: "Jun", users: 3000, revenue: 90000 },
];

const RenderOverviewSection = () => {
  const [userCount, setUserCount] = useState(null);
  useEffect(() => {
    const getUsersCount = async () => {
      const count = await fetchUsersCount();
      setUserCount(count);
    };

    getUsersCount();
  }, []);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Users
                </p>
                {/* <p>3,142</p> */}
                {userCount !== null ? (
                  <p className="text-2xl font-bold">{userCount}</p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Monthly Revenue
                </p>
                {/* <p className="text-2xl font-bold">$90,429</p> */}
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Success Rate
                </p>
                {/* <p className="text-2xl font-bold">99.2%</p> */}
              </div>
              <MessageSquare className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Churn Rate</p>
                {/* <p className="text-2xl font-bold">2.4%</p> */}
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>User growth and revenue trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="users"
                  stroke="#8884d8"
                  name="Total Users"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  name="Revenue ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RenderOverviewSection;
