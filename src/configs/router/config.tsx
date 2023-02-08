import { WeatherPage } from "pages/weather-page/WeatherPage";
import { RouteProps } from "react-router-dom";

export enum EAppRoutes {
  WEATHER = "weather",
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.WEATHER]: "/",
};

export const routerConfig: Record<EAppRoutes, RouteProps> = {
  [EAppRoutes.WEATHER]: { path: RoutePath.weather, element: <WeatherPage /> },
};
