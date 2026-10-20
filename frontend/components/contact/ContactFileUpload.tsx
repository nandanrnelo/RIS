"use client";

import React, { useState, useRef } from "react";
import {
  UploadCloud,
  FileText,
  FileSpreadsheet,
  FileCheck,
  Image as ImageIcon,
  X,
  AlertCircle,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";

interface ContactFileUploadProps {
  selectedFile: File | null;
  error?: string;
  onFileSelect: (file: File | null) => void;
  onError: (error?: string) => void;
}

export function ContactFileUpload({
  selectedFile,
  error,
  onFileSelect,
  onError,
}: ContactFileUploadProps) {
  const data = CONTACT_PAGE_DATA;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // File validation
  const validateFile = (file: File): string | undefined => {
    if (file.size > data.uploadConstraints.maxSizeBytes) {
      return `File exceeds the maximum allowed size of ${data.uploadConstraints.maxSizeDisplay}.`;
    }
    return undefined;
  };

  const handleFileList = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const file = fileList[0];
    const validationError = validateFile(file);

    if (validationError) {
      onError(validationError);
      return;
    }

    onError(undefined);
    onFileSelect(file);
  };

  const removeFile = () => {
    onFileSelect(null);
    onError(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileList(e.dataTransfer.files);
  };

  const getFileIcon = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (ext === "pdf") return <FileText className="h-6 w-6 text-red-600" />;
    if (["xls", "xlsx", "csv"].includes(ext || ""))
      return <FileSpreadsheet className="h-6 w-6 text-emerald-600" />;
    if (["jpg", "jpeg", "png"].includes(ext || ""))
      return <ImageIcon className="h-6 w-6 text-amber-600" />;
    return <FileCheck className="h-6 w-6 text-sky-600" />;
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="space-y-2 rounded-2xl border border-dashed border-stone-300 bg-stone-50/60 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label
            htmlFor="document-upload"
            className="text-xs font-bold tracking-wide text-stone-800 uppercase"
          >
            Technical Document Attachment
          </label>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase"
            style={{
              backgroundColor: `${COLOUR_PALETTE.secondary}50`,
              color: COLOUR_PALETTE.primaryDark,
            }}
          >
            Optional
          </span>
        </div>

        <span className="text-[11px] text-stone-500">
          Max {data.uploadConstraints.maxSizeDisplay}
        </span>
      </div>

      <p className="text-[11px] text-stone-500">
        {data.uploadConstraints.description}
      </p>

      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        id="document-upload"
        type="file"
        className="sr-only"
        accept={data.uploadConstraints.allowedExtensions.join(",")}
        onChange={(e) => handleFileList(e.target.files)}
      />

      {/* File card if file is selected */}
      {selectedFile ? (
        <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100">
              {getFileIcon(selectedFile)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-stone-900 sm:text-sm">
                {selectedFile.name}
              </p>
              <p className="text-[11px] text-stone-500">
                {formatFileSize(selectedFile.size)} • Ready for transmission
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={removeFile}
            className="rounded-lg p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
            title="Remove file"
            aria-label="Remove attached file"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        /* Interactive Drag-and-drop zone */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-all ${
            isDragging
              ? "border-emerald-600 bg-emerald-50/50"
              : "border-stone-300/80 bg-white/70 hover:border-stone-400 hover:bg-white"
          }`}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full shadow-inner"
            style={{
              backgroundColor: `${COLOUR_PALETTE.primaryDark}10`,
              color: COLOUR_PALETTE.primaryDark,
            }}
          >
            <UploadCloud className="h-6 w-6" />
          </div>

          <div className="space-y-0.5">
            <p className="text-xs font-bold text-stone-800">
              <span
                className="underline decoration-1 underline-offset-2"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                Click to upload
              </span>{" "}
              or drag & drop your document
            </p>
            <p className="text-[10px] text-stone-400">
              PDF, DOCX, XLSX, CSV, JPG, PNG up to 15 MB
            </p>
          </div>
        </div>
      )}

      {error && (
        <p className="flex items-center gap-1 pt-1 text-[11px] font-semibold text-red-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
