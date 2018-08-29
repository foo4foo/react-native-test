export function getStatusColor(status: string, styles: Object): Object {
  switch(status) {
    case 'failed':
      return styles.statusFailed;
    case 'running':
      return styles.statusRunning;
    case 'passed':
      return styles.statusPassed;
    case 'queued':
      return styles.statusQueued;
    default:
      return styles.statusFailed;
  }
}
