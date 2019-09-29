import { query, expect, mutate } from "./utils";

// integration testing
describe("Heroes Query", () => {
  it("should return an array of heroes", async () => {
    const getHeroesQuery = `
      query heroes {
        heroes {
          name,
          powers
        }
      }
    `;

    const expected = {
      heroes: [
        {
          name: "Spiderman",
          powers: ["Spider Sense", "Web"]
        },
        {
          name: "Batman",
          powers: null
        }
      ]
    };

    const { data } = await query({ query: getHeroesQuery });
    expect(data).to.eql(expected);
  });

  it("should create a new hero", async () => {
    const createHeroMutation = `
      mutation addHero {
        addHero(name: "Thor", powers: ["thunder"]) {
          name,
          powers
        }
      }
    `;

    const expected = {
      addHero: {
        name: "Thor",
        powers: ["thunder"]
      }
    };

    const { data } = await mutate({ mutation: createHeroMutation });
    expect(data).to.eql(expected);
  });
});
