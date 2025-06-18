const originalConsoleWarn = console.warn;

// Override to suppress legacy lifecycle method warnings from swagger-ui-react components
if (process.env.NODE_ENV === 'development') {
  console.warn = (...args: unknown[]) => {
    // Convert all arguments to strings to analyze the message
    const message = args.map(arg => String(arg)).join(' ');
    
    // Components from swagger-ui-react that we know use legacy lifecycle methods
    const swaggerComponentsToSkip = [
      'ContentType',
      'ParameterRow', 
      'JsonSchema_array',
      'ModelCollapse',
      'OperationContainer'
    ];

    // Check if this is a React legacy lifecycle warning
    const isLegacyLifecycleWarning = 
      message.includes('UNSAFE_componentWillReceiveProps') ||
      message.includes('componentWillReceiveProps has been renamed') ||
      message.includes('https://react.dev/link/unsafe-component-lifecycles');

    if (isLegacyLifecycleWarning) {
      // Check if any of the swagger components are mentioned in the warning
      const shouldSkip = swaggerComponentsToSkip.some(component => 
        message.includes(component)
      );

      if (shouldSkip) {
        // Log that we're suppressing this warning (you can remove this line once confirmed it's working)
        console.log(`[SUPPRESSED] React lifecycle warning for swagger-ui components: ${swaggerComponentsToSkip.filter(c => message.includes(c)).join(', ')}`);
        return; // Skip this warning
      }
    }

    // For any other warnings, show them normally
    originalConsoleWarn(...args);
  };
} 