/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Key =
  | "3d_modelling"
  | "analytics"
  | "application_launcher"
  | "artificial_intelligence"
  | "boot_loader"
  | "browser"
  | "browser_extension"
  | "cli"
  | "code_editor"
  | "desktop_environment"
  | "development"
  | "discussion_forum"
  | "document_viewer"
  | "education"
  | "email_client"
  | "entertainment"
  | "file_manager"
  | "game"
  | "game_development"
  | "health_and_fitness"
  | "library"
  | "music"
  | "news_and_journalism"
  | "note_taking"
  | "notification_daemon"
  | "photo_and_video"
  | "productivity"
  | "search_engine"
  | "self_hosted"
  | "social_networking"
  | "system"
  | "terminal"
  | "translation_tool"
  | "userstyle"
  | "wiki"
  | "window_manager";
export type Name = string;
export type Description = string;
export type Emoji = string;
/**
 * The categories listed in the README.
 */
export type CategoryDefinitions = CategoryItem[];

export interface CategoryItem {
  key: Key;
  name: Name;
  description: Description;
  emoji: Emoji;
}
