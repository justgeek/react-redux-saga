import UsersContainer from "../MainContainers/UsersContainer";

export interface RouteType {
  path: string;
  component: any;
}
// Usually we add More Routes (Screens) in this file
export const appRoutes: RouteType[] = [
  { path: "/", component: UsersContainer }
];
