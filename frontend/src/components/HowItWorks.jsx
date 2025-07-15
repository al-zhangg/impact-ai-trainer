import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Upload",
    description: "Upload your internal documents (PDF, DOCX, PPTX)",
    color: "bg-blue-500"
  },
  {
    number: "2",
    title: "Parse",
    description: "AI parses and divides content into logical chunks",
    color: "bg-purple-500"
  },
  {
    number: "3",
    title: "Transform",
    description: "Generate summaries and teaching scripts for each section",
    color: "bg-green-500"
  },
  {
    number: "4",
    title: "Train",
    description: "Use the generated materials to train your team effectively",
    color: "bg-orange-500"
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Transform your documents in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-12 h-12 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
