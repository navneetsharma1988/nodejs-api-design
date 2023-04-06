setTimeout(() => {
  throw new Error('Timeout');
}, 300);

process.on('uncaughtException', () => {
    
});

process.on('uncaughtRejection', () => {
    
});
