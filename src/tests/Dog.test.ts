import { beforeEach, describe, expect, test } from "vitest";
import { Dog } from "../domain/Dog";

describe("Dog class tests", () => {
  let dog: Dog;

  beforeEach(() => {
    dog = new Dog("Buddy", "Golden Retriever", 2, "Golden");
  });

  test("Dog can bark", () => {
    expect(dog.bark()).toBe("Woof! Woof!");
  });

  test("Dog returns its Description", () => {
    expect(dog.getDescription()).toBe("Buddy Golden Retriever");
  });

  test("Dog goes to sleep", () => {
    expect(dog.sleep()).toBe("Buddy is asleep");
    expect(dog.isSleeping).toBe(true);
  });

  test("Dog wakes up", () => {
    dog.sleep();
    expect(dog.wakeUp()).toBe("Buddy is awake");
    expect(dog.isSleeping).toBe(false);
  });

  test("Dog learns trick", () => {
    expect(dog.learnTrick("sit")).toBe("Buddy learned a new trick: sit.");
    expect(dog.tricks).toContain("sit");
  });

  test("Dong cannot learn an empty trick", () => {
    expect(() => dog.learnTrick("")).toThrow("Trick cannot be empty");
  });

  test("Dog displays info when awake", () => {
    dog.learnTrick("sit");
    expect(dog.displayInfo()).toBe(
      "Buddy is a 2 year old Golden Golden Retriever, is awake and knows these tricks: sit",
    );
  });

  test("Dog displays info when asleep", () => {
    dog.sleep();
    expect(dog.displayInfo()).toBe(
      "Buddy is a 2 year old Golden Golden Retriever, is asleep and knows these tricks: ",
    );
  });
});
