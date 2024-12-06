// "use client";

// import React, { useState } from "react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// // Define messages data
// const messages = [
//   {
//     id: 1,
//     userId: 1,
//     userName: "Sarah Johnson",
//     weekNumber: 6,
//     status: "delivered",
//     scheduledDate: "2024-03-15",
//     deliveredDate: "2024-03-15 09:00",
//     content:
//       "Dear Sarah, your dedication to marathon training is inspiring. This week's milestone of running 10km continuously shows real progress. Looking ahead, let's focus on recovery techniques - many successful marathoners in our community emphasize this aspect. Try implementing a 10-minute post-run stretching routine. You're building something remarkable here.",
//     openRate: "Read 2 hours ago",
//   },
//   {
//     id: 2,
//     userId: 2,
//     userName: "Mike Chen",
//     weekNumber: 12,
//     status: "failed",
//     scheduledDate: "2024-03-15",
//     error: "Delivery failed - invalid email",
//     content:
//       "Hi Mike, your novel writing journey has reached an exciting phase. With 12 weeks of consistent progress, you've established a solid writing routine. This week, let's explore character development techniques that other successful writers in our community have found helpful.",
//     retryCount: 2,
//   },
// ];

// const RenderMessagesSection = () => {
//   const [expandedMessage, setExpandedMessage] = useState(null);
//   const [messageFilter, setMessageFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <div className="space-y-6">
//       {/* Message Analytics Card - Moved to top */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Message Analytics</CardTitle>
//           <CardDescription>
//             Delivery performance and engagement metrics
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <div className="text-sm text-gray-600">Delivery Rate</div>
//               <div className="text-2xl font-bold text-green-600">98.5%</div>
//               <div className="text-xs text-gray-500">Last 7 days</div>
//             </div>
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <div className="text-sm text-gray-600">Open Rate</div>
//               <div className="text-2xl font-bold text-blue-600">76.2%</div>
//               <div className="text-xs text-gray-500">Last 7 days</div>
//             </div>
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <div className="text-sm text-gray-600">Failed Messages</div>
//               <div className="text-2xl font-bold text-red-600">23</div>
//               <div className="text-xs text-gray-500">Pending retry</div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Message Queue Card */}
//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <div>
//               <CardTitle>Message Queue</CardTitle>
//               <CardDescription>
//                 Manage and monitor message delivery
//               </CardDescription>
//             </div>
//             <div className="flex gap-2">
//               <Button variant="outline">🔄 Retry Failed</Button>
//               <Button>📅 Schedule Messages</Button>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="flex gap-4 mb-6">
//             <div className="relative flex-1">
//               <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
//               <Input
//                 placeholder="Search messages..."
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <select
//               className="px-4 py-2 border rounded-lg"
//               value={messageFilter}
//               onChange={(e) => setMessageFilter(e.target.value)}
//             >
//               <option value="all">All Messages</option>
//               <option value="delivered">Delivered</option>
//               <option value="failed">Failed</option>
//               <option value="pending">Pending</option>
//             </select>
//           </div>

//           <div className="space-y-4">
//             {messages.map((message) => (
//               <div key={message.id} className="border rounded-lg">
//                 <div className="flex items-center justify-between p-4">
//                   <div>
//                     <div className="font-medium">{message.userName}</div>
//                     <div className="text-sm text-gray-600">
//                       Week {message.weekNumber} - Scheduled:{" "}
//                       {message.scheduledDate}
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         message.status === "delivered"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {message.status === "delivered" ? "✓ " : "⚠ "}
//                       {message.status}
//                     </span>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() =>
//                         setExpandedMessage(
//                           expandedMessage === message.id ? null : message.id
//                         )
//                       }
//                     >
//                       {expandedMessage === message.id ? "▼" : "▶"}
//                     </Button>
//                   </div>
//                 </div>
//                 {expandedMessage === message.id && (
//                   <div className="border-t p-4 bg-gray-50">
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium mb-2">Message Content:</h4>
//                         <p className="text-sm">{message.content}</p>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <div className="text-sm text-gray-600">
//                           {message.status === "delivered"
//                             ? message.openRate
//                             : `Failed attempts: ${message.retryCount}`}
//                         </div>
//                         <div className="flex gap-2">
//                           <Button variant="outline" size="sm">
//                             ✏️ Edit
//                           </Button>
//                           <Button variant="outline" size="sm">
//                             🔄 Resend
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default RenderMessagesSection;
