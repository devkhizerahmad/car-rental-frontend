import config from "../../config/config";
import { Client, Account, ID, Storage, Query, Databases } from "appwrite";

export class Service {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost(title, slug, content, featuredImage, status, userId) {
    try {
      const post = await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      console.log("post :", post);

      return post;
    } catch (error) {
      console.error("Create post error:", error);
      throw new Error("Error :", error.message);
    }
  }

  async updatePost(slug, { title, slug, content, featuredImage, status }) {
    try {
      const updatedPost = await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      console.log("updatedPost :", updatedPost);

      return updatedPost;
    } catch (error) {
      console.error("Update post error:", error);
      throw new Error("Error :", error.message);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Delete post error:", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      const post = await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.error("Get post error:", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const posts = await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
      return posts.documents;
    } catch (error) {
      console.error("Get posts error:", error);
      return false;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      const uploadedFile = await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return uploadedFile;
    } catch (error) {
      console.error("File upload error:", error);
      throw new Error("Error :", error.message);
    }
  }
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("File delete error:", error);
      return false;
    }
  }
  getFilePreviewURL(fileId) {
    return this.storage.getFilePreview(
      config.appwriteBucketId,
      fileId
    );
  }
}

const service = new Service();

export default service;
