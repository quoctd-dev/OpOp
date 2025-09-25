package com.quoctd.opopbackend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import java.io.File;
import java.io.IOException;
import java.util.Map;

public class CloudinaryService {
    private Cloudinary cloudinary;

    public CloudinaryService() {
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dzpuwvvil",
                "api_key", "285542169899491",
                "api_secret", "O8Hb-GDJvm02K-Q5V5ZFxsEFK9M"));
    }

    public Cloudinary getCloudinary() {
        return cloudinary;
    }

    public void setCloudinary(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public void uploadFile(String url) throws IOException {
        File file = new File(url);
        Map uploadResult = cloudinary.uploader().upload(file,
                ObjectUtils.asMap(
                "resource_type", "video",
                        "folder", "songs"
        ));
        System.out.println(uploadResult.get("url"));
    }

    public static void main(String[] args) {
        CloudinaryService cloudinaryService = new CloudinaryService();
        try {
            cloudinaryService.uploadFile("D:/Sime.mp3");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
