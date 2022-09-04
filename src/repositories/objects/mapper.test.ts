import { mapObjects } from "./mapper";

describe("mapObjects", () => {
  it("should convert currect property names", () => {
    const result = mapObjects([
      {
        id: 1,
        title: "ハーフマラソン完走する",
        purpose: "ランニングの実績を上げるため",
        description: "",
        deadline_date: "2022-09-04",
        image_url: "file:///test.jpg",
        achieved: 0,
        created_at: "",
        modified_at: null,
      },
    ]);

    expect(result).toEqual([
      {
        achieved: false,
        createdAt: "",
        deadlineDate: "2022-09-04",
        description: "",
        id: 1,
        imageUrl: "file:///test.jpg",
        modifiedAt: null,
        purpose: "ランニングの実績を上げるため",
        title: "ハーフマラソン完走する",
      },
    ]);
  });
});
