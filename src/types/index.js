import type { BuildsAction } from './builds';

export type Props =
  | 'branch' | 'user' | 'failed' | 'outcome' | 'start_time' | 'stop_time' | 'subject' | 'body'
  | 'messages' | 'ssh_disabled' | 'build_time_millis' | 'status';

export type State = Map<Props, any>

export type Action =
  | BuildsAction
