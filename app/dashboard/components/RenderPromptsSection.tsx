"use client";

import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const RenderPromptsSection = () => {
  const [promptTemplate, setPromptTemplate] =
    useState(`You are a supportive AI coach helping {{user_name}} achieve their goal of {{goal}}. 
This is week {{week_number}} of their 52-week journey.

Previous advice given: {{previous_advice}}
Current progress: {{progress}}

Write an encouraging message that:
1. Acknowledges their progress
2. Provides specific advice for this week
3. Includes relevant statistics from other users
4. Ends with a motivational note

Keep the tone supportive and personal.`);
  return (
    <Card>
      <CardHeader>
        <CardTitle>LLM Prompt Management</CardTitle>
        <CardDescription>
          Configure the message generation prompt template
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            value={promptTemplate}
            onChange={(e) => setPromptTemplate(e.target.value)}
            className="h-96 font-mono"
          />
          <div className="space-y-2">
            <h3 className="font-medium">Available Variables:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>{"{{user_name}} - User's name"}</li>
              <li>{"{{goal}} - User's goal"}</li>
              <li>{"{{week_number}} - Current week (1-52)"}</li>
              <li>{"{{previous_advice}} - Last week's message"}</li>
              <li>{"{{progress}} - User's reported progress"}</li>
            </ul>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">Reset to Default</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RenderPromptsSection;
