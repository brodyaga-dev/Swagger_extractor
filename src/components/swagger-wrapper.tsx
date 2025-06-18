'use client';

import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

interface SwaggerWrapperProps {
  url?: string;
  spec?: object;
}

// This component explicitly disables StrictMode to avoid legacy lifecycle warnings from swagger-ui-react
export default function SwaggerWrapper({ url, spec }: SwaggerWrapperProps) {
  // Create a non-strict mode container for SwaggerUI
  return (
    <div suppressHydrationWarning>
      {spec ? (
        <SwaggerUI spec={spec} />
      ) : (
        <SwaggerUI url={url} />
      )}
    </div>
  );
} 