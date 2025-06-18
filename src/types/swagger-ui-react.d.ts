declare module 'swagger-ui-react' {
  import { ComponentType } from 'react';

  interface SwaggerUIProps {
    url?: string;
    spec?: object;
    layout?: string;
    deepLinking?: boolean;
    showExtensions?: boolean;
    showCommonExtensions?: boolean;
    onComplete?: (swaggerApi: unknown) => void;
    requestInterceptor?: (request: unknown) => unknown;
    responseInterceptor?: (response: unknown) => unknown;
    docExpansion?: 'list' | 'full' | 'none';
    defaultModelsExpandDepth?: number;
    defaultModelExpandDepth?: number;
    defaultModelRendering?: 'example' | 'model';
    displayOperationId?: boolean;
    displayRequestDuration?: boolean;
    filter?: boolean | string;
    maxDisplayedTags?: number;
    persistAuthorization?: boolean;
    presets?: unknown[];
    plugins?: unknown[];
    supportedSubmitMethods?: string[];
    tagsSorter?: 'alpha' | ((a: string, b: string) => number);
    operationsSorter?: 'alpha' | 'method' | ((a: unknown, b: unknown) => number);
    tryItOutEnabled?: boolean;
    requestSnippetsEnabled?: boolean;
    requestSnippets?: unknown;
    oauth2RedirectUrl?: string;
    showMutatedRequest?: boolean;
    syntaxHighlight?: {
      activated?: boolean;
      theme?: string;
    };
    [key: string]: unknown;
  }

  const SwaggerUI: ComponentType<SwaggerUIProps>;
  export default SwaggerUI;
}

declare module 'swagger-ui-react/swagger-ui.css'; 