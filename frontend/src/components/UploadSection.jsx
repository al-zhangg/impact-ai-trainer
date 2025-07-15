import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Loader2, AlertCircle } from "lucide-react";

export default function UploadSection({ onFileUpload, isUploading, uploadError }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Upload Your Documents
        </h2>
        <p className="text-gray-600">
          Drag and drop your files here, or click to select files
        </p>
      </div>

      <Card className="border-2 border-dashed border-purple-200 hover:border-purple-300 transition-colors">
        <CardContent 
          className="p-12 text-center cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.pptx"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />
          
          <div className="w-16 h-16 bg-purple-50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            {isUploading ? (
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
            ) : (
              <Upload className="w-8 h-8 text-purple-600" />
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {isUploading ? "Uploading..." : "Upload Your Documents"}
          </h3>
          
          <p className="text-gray-500 mb-6">
            {isUploading ? "Please wait while we process your file..." : "Drag and drop your files here, or click to select files"}
          </p>
          
          <Button 
            disabled={isUploading}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Select Files
              </>
            )}
          </Button>
          
          <p className="text-sm text-gray-400 mt-4">
            Supports PDF, DOCX, and PPTX files up to 10MB each
          </p>
        </CardContent>
      </Card>

      {uploadError && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{uploadError}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
