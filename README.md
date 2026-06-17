# Thiệp cưới online

Trang thiệp cưới tĩnh, responsive cho desktop và mobile.

## Chỉnh nội dung

Mở file `script.js` và sửa trong object `weddingData`:

- `groomFullName`, `brideFullName`: tên cô dâu chú rể
- `groomParents`, `brideParents`: tên ba mẹ hai bên
- `weddingDate`, `weddingTime`: ngày giờ tổ chức
- `venueName`, `venueAddress`: địa điểm tổ chức
- `mapEmbedUrl`, `mapLink`: link nhúng và link mở Google Maps
- `photos`: thay `url` bằng link ảnh thật của bạn
- `quotes`: thay bằng các câu ca dao tục ngữ bạn muốn hiển thị

## Chạy local

Tại thư mục dự án:

```bash
python3 -m http.server 4173
```

Sau đó mở:

```text
http://127.0.0.1:4173
```
