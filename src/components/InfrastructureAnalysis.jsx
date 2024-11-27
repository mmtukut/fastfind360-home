import React, { useState } from 'react';
import { Map, BarChart2, Clock, Layers, Info, X } from 'lucide-react';
import MapComponent from '../components/MapComponent';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const InfrastructureAnalysis = () => {
  const [activeLayer, setActiveLayer] = useState('all');
  const [selectedArea, setSelectedArea] = useState('downtown');
  
  // Sample data for statistics
  const infrastructureData = [
    { name: 'Healthcare', count: 24, density: 8.5 },
    { name: 'Education', count: 35, density: 12.3 },
    { name: 'Transport', count: 18, density: 6.2 },
    { name: 'Utilities', count: 42, density: 14.8 },
  ];

  // Sample timeline data
  const timelineData = [
    { project: 'New Metro Station', status: 'In Progress', completion: '2025' },
    { project: 'Hospital Expansion', status: 'Planning', completion: '2026' },
    { project: 'School District Update', status: 'Completed', completion: '2024' },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-[#333333]">Infrastructure Analysis</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Map and Controls */}
        <div className="w-2/3 p-4 border-r border-gray-200">
          <Card className="h-full">
            <CardHeader className="p-4">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Map size={20} />
                  Infrastructure Map
                </CardTitle>
                <div className="flex gap-2">
                  <Select value={activeLayer} onValueChange={setActiveLayer}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Layer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Infrastructure</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="transport">Transportation</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 relative h-[calc(100%-70px)]">
              
              <CardContent className="p-0 relative h-[calc(100%-70px)]">
              <MapComponent center={[7.49, 9.0629]} zoom={12.3} />
              </CardContent>

            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Details and Statistics */}
        <div className="w-1/3 p-4 overflow-y-auto">
          {/* Infrastructure Statistics */}
          <Card className="mb-4">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2">
                <BarChart2 size={20} />
                Infrastructure Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={infrastructureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0066CC" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Development Timeline */}
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2">
                <Clock size={20} />
                Development Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[#0066CC]" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#333333]">{item.project}</h4>
                      <p className="text-sm text-gray-500">
                        {item.status} • Completion: {item.completion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureAnalysis;
