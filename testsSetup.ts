import { GlobalRegistrator } from "@happy-dom/global-registrator";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
GlobalRegistrator.register();
