import { convertBooleanValue } from "~/utils/db";
import { ObjectEntity, ObjectType } from "./type";

export const mapObjects = (objectsEntities: ObjectEntity[]): ObjectType[] => {
  return objectsEntities.map((entity) => {
    const { id, title, purpose, description } = entity;

    return {
      id,
      title,
      purpose,
      description,
      deadlineDate: entity.deadline_date,
      imageUrl: entity.image_url,
      achieved: convertBooleanValue(entity.achieved),
      createdAt: entity.created_at,
      modifiedAt: entity.modified_at,
    };
  });
};
