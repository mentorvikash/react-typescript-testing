import { render, screen, logRoles } from "../../../test-utils";
import MockingHttp from "./MockingHttp";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("MockingHttp", () => {
  test("if all users render from api", async () => {
    render(<MockingHttp />);
    // const { container } = render(<MockingHttp />);
    // logRoles(container);
    const ifComponentRender = screen.getByText("Users");
    expect(ifComponentRender).toBeInTheDocument();
    const userlist = await screen.findAllByRole("listitem");
    expect(userlist).toHaveLength(3);
  });

  test("if error reflectd in Ui", async () => {
    // here we are manually trigger the error to check how our component will responde in react time api request if error occour
    // By using server.use, we trigger this reqponse as middleware this resonce get executed before making actual request
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );

    render(<MockingHttp />);

    const errorELement = await screen.findByText("Error Occour");
    expect(errorELement).toBeInTheDocument();
  });
});

// For mocking api request should use mock service worker
// Because acture api may involve cost for each request to intead use mok service worker while testing
// Mock Server Worker - MSW

// lets test how to create error status while using mocking
// Here you learn how to create cutom error by using Mock Server Worker and test our component
