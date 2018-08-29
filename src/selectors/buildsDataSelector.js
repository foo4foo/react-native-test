// @flow
import { createSelector } from 'reselect';
import type { State } from '../types';
import type { Builds, Build } from '../types/builds';

const getBuilds = (state: State): Array<any> => state.builds.list;

export const getBuildsSelector: (state: State) => Builds = createSelector(
  getBuilds,
  (builds) => builds.map(b => {
    return {
      branch: b.branch,
      reponame: b.reponame,
      user: b.user,
      status: b.status,
      subject: b.subject,
      body: b.body,
      start_time: b.start_time,
      stop_time: b.stop_time,
      ssh_disabled: b.ssh_disabled,
      failed: b.failed,
      outcome: b.outcome,
      messages: b.messages,
      build_time_millis: b.build_time_millis
    }
  }
  )
);
