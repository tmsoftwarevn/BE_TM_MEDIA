-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 05, 2024 lúc 08:07 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tm_media`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2a$10$.y85DJxgaIoBSziuPJG.1.22divMYHY.0O1oKDrIG9y.sZzMEi.KC', '2024-02-02 09:28:17', '2024-02-05 06:35:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `id` int(11) NOT NULL,
  `tieude` varchar(255) DEFAULT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `meta_des` varchar(255) DEFAULT NULL,
  `mota_ngan` varchar(255) DEFAULT NULL,
  `noidung` text DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`id`, `tieude`, `key_word`, `meta_des`, `mota_ngan`, `noidung`, `thumbnail`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Cung cấp dịch vụ chụp hình quảng cáo tại TPHCM', 'sad', 'đá', 'Khi chúng ta bước vào năm 2024, các thương hiệu đang điều hướng một bối cảnh không chỉ thay đổi mà còn đang biến đổi. Một trong những yếu tố thay đổi cuộc chơi lớn nhất là việc loại bỏ dần sự tham gia của bên thứ ba. Sự thay đổi đáng kể này đang thách thứ', '<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\"><img src=\"http://localhost:8080/images/baiviet/quay-phim-doanh-nghiep-9-min (1)-1706936381469.jpg\" alt=\"quay-phim-doanh-nghiep-9-min (1).jpg\" width=\"auto\" height=\"auto\">Trong lĩnh vực quảng c&aacute;o, năm 2024 đ&aacute;nh dấu một giai đoạn đầy tiềm năng với những xu hướng mới đang nổi l&ecirc;n. C&ocirc;ng nghệ v&agrave; tr&iacute; tuệ nh&acirc;n tạo đ&atilde; tạo ra những tiến bộ đ&aacute;ng kể, mang lại sự s&aacute;ng tạo v&agrave; tương t&aacute;c cho ng&agrave;nh n&agrave;y.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-weight: 400;\">AI s&aacute;ng tạo kh&ocirc;ng chỉ l&agrave; một c&ocirc;ng cụ tự động h&oacute;a, n&oacute; l&agrave; chất x&uacute;c t&aacute;c cho sự s&aacute;ng tạo v&agrave; lập kế hoạch chiến lược trong tiếp thị kỹ thuật số. C&ocirc;ng nghệ n&agrave;y cho ph&eacute;p c&aacute;c Marketers ph&acirc;n t&iacute;ch dữ liệu người ti&ecirc;u d&ugrave;ng, dự đo&aacute;n xu hướng v&agrave; tạo ra nội dung ph&ugrave; hợp với đối tượng mục ti&ecirc;u. V&iacute; dụ: c&aacute;c c&ocirc;ng cụ do AI điều khiển c&oacute; thể tạo bản sao quảng c&aacute;o được c&aacute; nh&acirc;n h&oacute;a, đề xuất thời gian đăng b&agrave;i tối ưu v&agrave; thậm ch&iacute; đề xuất chiến lược nội dung dựa tr&ecirc;n dữ liệu tương t&aacute;c của người d&ugrave;ng. Khi AI trở n&ecirc;n phức tạp hơn, vai tr&ograve; của n&oacute; trong việc tạo nội dung, tối ưu h&oacute;a chiến dịch v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng cũng tăng theo cấp số nh&acirc;n. C&aacute;c nh&agrave; tiếp thị tận dụng AI đang t&igrave;m ra những c&aacute;ch mới để kết nối với kh&aacute;n giả, thường l&agrave; theo thời gian thực v&agrave; mang t&iacute;nh c&aacute; nh&acirc;n h&oacute;a cao hơn.</span></span></p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1706936174486.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"500\" height=\"auto\"></p>\n<p>&nbsp;</p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Nghi&ecirc;n cứu gần đ&acirc;y của Unilever đ&atilde; nhấn mạnh sức mạnh tuyệt vời của khả năng của những người c&oacute; ảnh hưởng trong việc định h&igrave;nh h&agrave;nh vi v&agrave; khuyến kh&iacute;ch c&aacute;c lựa chọn xanh hơn &ndash; đối với 78% người d&acirc;n, họ c&oacute; t&aacute;c động lớn nhất đến tất cả c&aacute;c phương tiện truyền th&ocirc;ng, lớn hơn TV, tin tức v&agrave; thậm ch&iacute; cả c&aacute;c chiến dịch của ch&iacute;nh phủ.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Hơn thế nữa, 3/4 số người c&oacute; nhiều khả năng thực hiện c&aacute;c h&agrave;nh vi c&oacute; lợi cho m&ocirc;i trường sau khi xem nội dung tr&ecirc;n mạng x&atilde; hội, trong khi 8/10 (83%) cho rằng TikTok v&agrave; Instagram l&agrave; những nơi tốt để nhận lời khuy&ecirc;n về c&aacute;ch sống bền vững. .</span></p>', 'home-video-1707045314231.jpg', 1, '2024-02-03 09:48:15', '2024-02-05 03:41:47'),
(3, '5 xu hướng định hình ngành quảng cáo trong 2024tểtrt', 'sad', 'đá', 'Khi chúng ta bước vào năm 2024, các thương hiệu đang điều hướng một bối cảnh không chỉ thay đổi mà còn đang biến đổi. Một trong những yếu tố thay đổi cuộc chơi lớn nhất là việc loại bỏ dần sự tham gia của bên thứ ba. Sự thay đổi đáng kể này đang thách thứ', '<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\"><img src=\"http://localhost:8080/images/baiviet/quay-phim-doanh-nghiep-9-min (1)-1706936381469.jpg\" alt=\"quay-phim-doanh-nghiep-9-min (1).jpg\" width=\"auto\" height=\"auto\">Trong lĩnh vực quảng c&aacute;o, năm 2024 đ&aacute;nh dấu một giai đoạn đầy tiềm năng với những xu hướng mới đang nổi l&ecirc;n. C&ocirc;ng nghệ v&agrave; tr&iacute; tuệ nh&acirc;n tạo đ&atilde; tạo ra những tiến bộ đ&aacute;ng kể, mang lại sự s&aacute;ng tạo v&agrave; tương t&aacute;c cho ng&agrave;nh n&agrave;y.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-weight: 400;\">AI s&aacute;ng tạo kh&ocirc;ng chỉ l&agrave; một c&ocirc;ng cụ tự động h&oacute;a, n&oacute; l&agrave; chất x&uacute;c t&aacute;c cho sự s&aacute;ng tạo v&agrave; lập kế hoạch chiến lược trong tiếp thị kỹ thuật số. C&ocirc;ng nghệ n&agrave;y cho ph&eacute;p c&aacute;c Marketers ph&acirc;n t&iacute;ch dữ liệu người ti&ecirc;u d&ugrave;ng, dự đo&aacute;n xu hướng v&agrave; tạo ra nội dung ph&ugrave; hợp với đối tượng mục ti&ecirc;u. V&iacute; dụ: c&aacute;c c&ocirc;ng cụ do AI điều khiển c&oacute; thể tạo bản sao quảng c&aacute;o được c&aacute; nh&acirc;n h&oacute;a, đề xuất thời gian đăng b&agrave;i tối ưu v&agrave; thậm ch&iacute; đề xuất chiến lược nội dung dựa tr&ecirc;n dữ liệu tương t&aacute;c của người d&ugrave;ng. Khi AI trở n&ecirc;n phức tạp hơn, vai tr&ograve; của n&oacute; trong việc tạo nội dung, tối ưu h&oacute;a chiến dịch v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng cũng tăng theo cấp số nh&acirc;n. C&aacute;c nh&agrave; tiếp thị tận dụng AI đang t&igrave;m ra những c&aacute;ch mới để kết nối với kh&aacute;n giả, thường l&agrave; theo thời gian thực v&agrave; mang t&iacute;nh c&aacute; nh&acirc;n h&oacute;a cao hơn.</span></span></p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1706936174486.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"500\" height=\"auto\"></p>\r\n<p>&nbsp;</p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Nghi&ecirc;n cứu gần đ&acirc;y của Unilever đ&atilde; nhấn mạnh sức mạnh tuyệt vời của khả năng của những người c&oacute; ảnh hưởng trong việc định h&igrave;nh h&agrave;nh vi v&agrave; khuyến kh&iacute;ch c&aacute;c lựa chọn xanh hơn &ndash; đối với 78% người d&acirc;n, họ c&oacute; t&aacute;c động lớn nhất đến tất cả c&aacute;c phương tiện truyền th&ocirc;ng, lớn hơn TV, tin tức v&agrave; thậm ch&iacute; cả c&aacute;c chiến dịch của ch&iacute;nh phủ.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Hơn thế nữa, 3/4 số người c&oacute; nhiều khả năng thực hiện c&aacute;c h&agrave;nh vi c&oacute; lợi cho m&ocirc;i trường sau khi xem nội dung tr&ecirc;n mạng x&atilde; hội, trong khi 8/10 (83%) cho rằng TikTok v&agrave; Instagram l&agrave; những nơi tốt để nhận lời khuy&ecirc;n về c&aacute;ch sống bền vững. .</span></p>', '2-1-1707045339914.jpg', 1, '2024-02-03 09:48:15', '2024-02-04 11:15:42'),
(4, '5 xu hướng định hình ngành quảng cáo trong 2024', 'sad', 'đá', 'Khi chúng ta bước vào năm 2024, các thương hiệu đang điều hướng một bối cảnh không chỉ thay đổi mà còn đang biến đổi. Một trong những yếu tố thay đổi cuộc chơi lớn nhất là việc loại bỏ dần sự tham gia của bên thứ ba. Sự thay đổi đáng kể này đang thách thứ', '<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\"><img src=\"http://localhost:8080/images/baiviet/quay-phim-doanh-nghiep-9-min (1)-1706936381469.jpg\" alt=\"quay-phim-doanh-nghiep-9-min (1).jpg\" width=\"auto\" height=\"auto\">Trong lĩnh vực quảng c&aacute;o, năm 2024 đ&aacute;nh dấu một giai đoạn đầy tiềm năng với những xu hướng mới đang nổi l&ecirc;n. C&ocirc;ng nghệ v&agrave; tr&iacute; tuệ nh&acirc;n tạo đ&atilde; tạo ra những tiến bộ đ&aacute;ng kể, mang lại sự s&aacute;ng tạo v&agrave; tương t&aacute;c cho ng&agrave;nh n&agrave;y.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-weight: 400;\">AI s&aacute;ng tạo kh&ocirc;ng chỉ l&agrave; một c&ocirc;ng cụ tự động h&oacute;a, n&oacute; l&agrave; chất x&uacute;c t&aacute;c cho sự s&aacute;ng tạo v&agrave; lập kế hoạch chiến lược trong tiếp thị kỹ thuật số. C&ocirc;ng nghệ n&agrave;y cho ph&eacute;p c&aacute;c Marketers ph&acirc;n t&iacute;ch dữ liệu người ti&ecirc;u d&ugrave;ng, dự đo&aacute;n xu hướng v&agrave; tạo ra nội dung ph&ugrave; hợp với đối tượng mục ti&ecirc;u. V&iacute; dụ: c&aacute;c c&ocirc;ng cụ do AI điều khiển c&oacute; thể tạo bản sao quảng c&aacute;o được c&aacute; nh&acirc;n h&oacute;a, đề xuất thời gian đăng b&agrave;i tối ưu v&agrave; thậm ch&iacute; đề xuất chiến lược nội dung dựa tr&ecirc;n dữ liệu tương t&aacute;c của người d&ugrave;ng. Khi AI trở n&ecirc;n phức tạp hơn, vai tr&ograve; của n&oacute; trong việc tạo nội dung, tối ưu h&oacute;a chiến dịch v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng cũng tăng theo cấp số nh&acirc;n. C&aacute;c nh&agrave; tiếp thị tận dụng AI đang t&igrave;m ra những c&aacute;ch mới để kết nối với kh&aacute;n giả, thường l&agrave; theo thời gian thực v&agrave; mang t&iacute;nh c&aacute; nh&acirc;n h&oacute;a cao hơn.</span></span></p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1706936174486.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"500\" height=\"auto\"></p>\r\n<p>&nbsp;</p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Nghi&ecirc;n cứu gần đ&acirc;y của Unilever đ&atilde; nhấn mạnh sức mạnh tuyệt vời của khả năng của những người c&oacute; ảnh hưởng trong việc định h&igrave;nh h&agrave;nh vi v&agrave; khuyến kh&iacute;ch c&aacute;c lựa chọn xanh hơn &ndash; đối với 78% người d&acirc;n, họ c&oacute; t&aacute;c động lớn nhất đến tất cả c&aacute;c phương tiện truyền th&ocirc;ng, lớn hơn TV, tin tức v&agrave; thậm ch&iacute; cả c&aacute;c chiến dịch của ch&iacute;nh phủ.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Hơn thế nữa, 3/4 số người c&oacute; nhiều khả năng thực hiện c&aacute;c h&agrave;nh vi c&oacute; lợi cho m&ocirc;i trường sau khi xem nội dung tr&ecirc;n mạng x&atilde; hội, trong khi 8/10 (83%) cho rằng TikTok v&agrave; Instagram l&agrave; những nơi tốt để nhận lời khuy&ecirc;n về c&aacute;ch sống bền vững. .</span></p>', 'gfdgfdgf-1707045348683.png', 1, '2024-02-03 09:48:15', '2024-02-04 11:15:51'),
(5, '5 xu hướng định hình ngành quảng cáo trong 2024', 'sad', 'đá', 'Khi chúng ta bước vào năm 2024, các thương hiệu đang điều hướng một bối cảnh không chỉ thay đổi mà còn đang biến đổi. Một trong những yếu tố thay đổi cuộc chơi lớn nhất là việc loại bỏ dần sự tham gia của bên thứ ba. Sự thay đổi đáng kể này đang thách thứ', '<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\"><img src=\"http://localhost:8080/images/baiviet/quay-phim-doanh-nghiep-9-min (1)-1706936381469.jpg\" alt=\"quay-phim-doanh-nghiep-9-min (1).jpg\" width=\"auto\" height=\"auto\">Trong lĩnh vực quảng c&aacute;o, năm 2024 đ&aacute;nh dấu một giai đoạn đầy tiềm năng với những xu hướng mới đang nổi l&ecirc;n. C&ocirc;ng nghệ v&agrave; tr&iacute; tuệ nh&acirc;n tạo đ&atilde; tạo ra những tiến bộ đ&aacute;ng kể, mang lại sự s&aacute;ng tạo v&agrave; tương t&aacute;c cho ng&agrave;nh n&agrave;y.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-weight: 400;\">AI s&aacute;ng tạo kh&ocirc;ng chỉ l&agrave; một c&ocirc;ng cụ tự động h&oacute;a, n&oacute; l&agrave; chất x&uacute;c t&aacute;c cho sự s&aacute;ng tạo v&agrave; lập kế hoạch chiến lược trong tiếp thị kỹ thuật số. C&ocirc;ng nghệ n&agrave;y cho ph&eacute;p c&aacute;c Marketers ph&acirc;n t&iacute;ch dữ liệu người ti&ecirc;u d&ugrave;ng, dự đo&aacute;n xu hướng v&agrave; tạo ra nội dung ph&ugrave; hợp với đối tượng mục ti&ecirc;u. V&iacute; dụ: c&aacute;c c&ocirc;ng cụ do AI điều khiển c&oacute; thể tạo bản sao quảng c&aacute;o được c&aacute; nh&acirc;n h&oacute;a, đề xuất thời gian đăng b&agrave;i tối ưu v&agrave; thậm ch&iacute; đề xuất chiến lược nội dung dựa tr&ecirc;n dữ liệu tương t&aacute;c của người d&ugrave;ng. Khi AI trở n&ecirc;n phức tạp hơn, vai tr&ograve; của n&oacute; trong việc tạo nội dung, tối ưu h&oacute;a chiến dịch v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng cũng tăng theo cấp số nh&acirc;n. C&aacute;c nh&agrave; tiếp thị tận dụng AI đang t&igrave;m ra những c&aacute;ch mới để kết nối với kh&aacute;n giả, thường l&agrave; theo thời gian thực v&agrave; mang t&iacute;nh c&aacute; nh&acirc;n h&oacute;a cao hơn.</span></span></p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1706936174486.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"500\" height=\"auto\"></p>\r\n<p>&nbsp;</p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Nghi&ecirc;n cứu gần đ&acirc;y của Unilever đ&atilde; nhấn mạnh sức mạnh tuyệt vời của khả năng của những người c&oacute; ảnh hưởng trong việc định h&igrave;nh h&agrave;nh vi v&agrave; khuyến kh&iacute;ch c&aacute;c lựa chọn xanh hơn &ndash; đối với 78% người d&acirc;n, họ c&oacute; t&aacute;c động lớn nhất đến tất cả c&aacute;c phương tiện truyền th&ocirc;ng, lớn hơn TV, tin tức v&agrave; thậm ch&iacute; cả c&aacute;c chiến dịch của ch&iacute;nh phủ.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Hơn thế nữa, 3/4 số người c&oacute; nhiều khả năng thực hiện c&aacute;c h&agrave;nh vi c&oacute; lợi cho m&ocirc;i trường sau khi xem nội dung tr&ecirc;n mạng x&atilde; hội, trong khi 8/10 (83%) cho rằng TikTok v&agrave; Instagram l&agrave; những nơi tốt để nhận lời khuy&ecirc;n về c&aacute;ch sống bền vững. .</span></p>', 'tyt-1707045359589.jpg', 0, '2024-02-03 09:48:15', '2024-02-04 11:16:02'),
(6, '5 xu hướng định hình ngành quảng cáo trong 2024', 'sad', 'đá', 'Khi chúng ta bước vào năm 2024, các thương hiệu đang điều hướng một bối cảnh không chỉ thay đổi mà còn đang biến đổi. Một trong những yếu tố thay đổi cuộc chơi lớn nhất là việc loại bỏ dần sự tham gia của bên thứ ba. Sự thay đổi đáng kể này đang thách thứ', '<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\"><img src=\"http://localhost:8080/images/baiviet/quay-phim-doanh-nghiep-9-min (1)-1706936381469.jpg\" alt=\"quay-phim-doanh-nghiep-9-min (1).jpg\" width=\"auto\" height=\"auto\">Trong lĩnh vực quảng c&aacute;o, năm 2024 đ&aacute;nh dấu một giai đoạn đầy tiềm năng với những xu hướng mới đang nổi l&ecirc;n. C&ocirc;ng nghệ v&agrave; tr&iacute; tuệ nh&acirc;n tạo đ&atilde; tạo ra những tiến bộ đ&aacute;ng kể, mang lại sự s&aacute;ng tạo v&agrave; tương t&aacute;c cho ng&agrave;nh n&agrave;y.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-family: arial, helvetica, sans-serif;\"><span style=\"font-weight: 400;\">AI s&aacute;ng tạo kh&ocirc;ng chỉ l&agrave; một c&ocirc;ng cụ tự động h&oacute;a, n&oacute; l&agrave; chất x&uacute;c t&aacute;c cho sự s&aacute;ng tạo v&agrave; lập kế hoạch chiến lược trong tiếp thị kỹ thuật số. C&ocirc;ng nghệ n&agrave;y cho ph&eacute;p c&aacute;c Marketers ph&acirc;n t&iacute;ch dữ liệu người ti&ecirc;u d&ugrave;ng, dự đo&aacute;n xu hướng v&agrave; tạo ra nội dung ph&ugrave; hợp với đối tượng mục ti&ecirc;u. V&iacute; dụ: c&aacute;c c&ocirc;ng cụ do AI điều khiển c&oacute; thể tạo bản sao quảng c&aacute;o được c&aacute; nh&acirc;n h&oacute;a, đề xuất thời gian đăng b&agrave;i tối ưu v&agrave; thậm ch&iacute; đề xuất chiến lược nội dung dựa tr&ecirc;n dữ liệu tương t&aacute;c của người d&ugrave;ng. Khi AI trở n&ecirc;n phức tạp hơn, vai tr&ograve; của n&oacute; trong việc tạo nội dung, tối ưu h&oacute;a chiến dịch v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng cũng tăng theo cấp số nh&acirc;n. C&aacute;c nh&agrave; tiếp thị tận dụng AI đang t&igrave;m ra những c&aacute;ch mới để kết nối với kh&aacute;n giả, thường l&agrave; theo thời gian thực v&agrave; mang t&iacute;nh c&aacute; nh&acirc;n h&oacute;a cao hơn.</span></span></p>\r\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1706936174486.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"500\" height=\"auto\"></p>\r\n<p>&nbsp;</p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Nghi&ecirc;n cứu gần đ&acirc;y của Unilever đ&atilde; nhấn mạnh sức mạnh tuyệt vời của khả năng của những người c&oacute; ảnh hưởng trong việc định h&igrave;nh h&agrave;nh vi v&agrave; khuyến kh&iacute;ch c&aacute;c lựa chọn xanh hơn &ndash; đối với 78% người d&acirc;n, họ c&oacute; t&aacute;c động lớn nhất đến tất cả c&aacute;c phương tiện truyền th&ocirc;ng, lớn hơn TV, tin tức v&agrave; thậm ch&iacute; cả c&aacute;c chiến dịch của ch&iacute;nh phủ.</span></p>\r\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400; font-family: arial, helvetica, sans-serif;\">Hơn thế nữa, 3/4 số người c&oacute; nhiều khả năng thực hiện c&aacute;c h&agrave;nh vi c&oacute; lợi cho m&ocirc;i trường sau khi xem nội dung tr&ecirc;n mạng x&atilde; hội, trong khi 8/10 (83%) cho rằng TikTok v&agrave; Instagram l&agrave; những nơi tốt để nhận lời khuy&ecirc;n về c&aacute;ch sống bền vững. .</span></p>', 'fdf-1707045368693.jpg', 0, '2024-02-03 09:48:15', '2024-02-04 11:16:11'),
(7, 'Arsenal hạ Liverpool để thắp lại hy vọng ở Ngoại hạng Anh', 'fsdf', 'fsdf', 'fdsf', '<p>fsdf</p>', 'banner-thong-ke-1707045306328.jpeg', 0, '2024-02-04 12:12:54', '2024-02-05 04:28:58'),
(8, 'Công nghệ và trí tuệ nhân tạo đã tạo ra những tiến bộ đáng kể, mang lại sự sáng tạo và tương tác updtae', 'đá', 'đá', 'dsad', '<p class=\"Normal\">Liepool h&agrave;nh qu&acirc;n đến s&acirc;n Emirates với mục ti&ecirc;u duy tr&igrave; khoảng c&aacute;ch năm điểm với nh&igrave; bảng Man City. Tuy nhi&ecirc;n, họ thiệt th&ograve;i về lực lượng khi Mohamed Salah v&agrave; Dominik Szoboszlai vắng mặt v&igrave; chấn thương. Darwin Nunez cũng bị đau v&agrave; phải bắt đầu trận đấu tr&ecirc;n ghế dự bị. Wataru Endo chưa sẵn s&agrave;ng sau khi trở về từ Asian Cup.</p>\n<p class=\"Normal\">Lực lượng nhỉnh hơn lại đ&aacute; s&acirc;n nh&agrave;, Arsenal chiếm lĩnh thế trận. Tuyến giữa lấn lướt, gi&uacute;p \"Ph&aacute;o thủ\" c&oacute; nhiều pha l&ecirc;n b&oacute;ng nhanh, nhuần nhuyễn v&agrave; li&ecirc;n tiếp tạo cơ hội ở đầu trận. Bukayo Saka kh&ocirc;ng th&agrave;nh c&ocirc;ng với hai cơ hội dứt điểm trong v&ograve;ng cấm, nhưng trong pha tấn c&ocirc;ng nhanh ở ph&uacute;t 14, cầu thủ người Anh dễ d&agrave;ng s&uacute;t tung lưới khi khung th&agrave;nh đ&atilde; mở rộng. Ở t&igrave;nh huống n&agrave;y, Martin Odegaard g&oacute;p c&ocirc;ng đầu với pha chọc khe để Kai Havertz đối mặt Alisson. C&uacute; s&uacute;t của cầu thủ Đức kh&ocirc;ng đ&aacute;nh bại thủ m&ocirc;n Liverpool, nhưng tạo điều kiện để Saka đ&aacute; bồi. update</p>\n<p class=\"Normal\"><img src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1707104177862.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"300\" height=\"auto\"> <img src=\"http://localhost:8080/images/baiviet/banner-thong-ke-1707105288876.jpeg\" alt=\"banner-thong-ke.jpeg\" width=\"300\" height=\"auto\"></p>\n<p class=\"Normal\">. Ở t&igrave;nh huống n&agrave;y, Martin Odegaard g&oacute;p c&ocirc;ng đầu với pha chọc khe để Kai Havertz đối mặt Alisson. C&uacute; s&uacute;t của cầu thủ Đức kh&ocirc;ng đ&aacute;nh bại thủ m&ocirc;n Liverpool, nhưng tạo điều kiện để Saka đ&aacute; bồi.</p>', '1700297631-social-media-marketing-1707045290670.jpg', 1, '2024-02-04 13:50:47', '2024-02-05 06:37:15'),
(9, 'test', 'đá', 'ád', 'đá', '<h3 id=\"bang-gia-dich-vu-content-facebook-fanpage-mang-xa-hoi\">Bảng gi&aacute; dịch vụ content facebook, fanpage, mạng x&atilde; hội&hellip;</h3>\n<p>Mạng x&atilde; hội đ&atilde; thay đổi cuộc sống của ch&uacute;ng ta như thế n&agrave;o th&igrave; chắc hẳn mọi người ai cũng đều biết. Những b&agrave;i viết đăng l&ecirc;n mạng x&atilde; hội lu&ocirc;n c&oacute; sự lan tỏa nhanh với độ phủ rộng. Ch&iacute;nh v&igrave; vậy, một b&agrave;i content mạng x&atilde; hội chất lượng, thu h&uacute;t, lan tỏa v&agrave; hơn hết l&agrave; &ldquo;g&atilde;i đ&uacute;ng chỗ ngứa&rdquo; của kh&aacute;ch h&agrave;ng sẽ gi&uacute;p tăng doanh số b&aacute;n h&agrave;ng v&agrave; ph&aacute;t triển thương hiệu doanh nghiệp một c&aacute;ch nhanh ch&oacute;ng.</p>', 'doi-tac-tieu-bieu-1707115831562.png', 0, '2024-02-05 13:50:45', '2024-02-05 06:50:45');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lienhe`
--

CREATE TABLE `lienhe` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `noidung` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `lienhe`
--

INSERT INTO `lienhe` (`id`, `name`, `email`, `phone`, `noidung`, `createdAt`, `updatedAt`) VALUES
(1, 'eqwe', 'fdgdfh@gmail.com', '0987654321', 'cádsd', '2024-02-02 13:44:07', '2024-02-02 06:44:07'),
(3, 'gdfg', 'ggg@gmail.com', '0987654123', 'rewr', '2024-02-04 18:19:57', '2024-02-04 11:19:57'),
(4, 'đá', 'fgf@gmail.com', '0359871465', 'đácxz', '2024-02-05 13:49:55', '2024-02-05 06:49:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `meta_des` varchar(255) DEFAULT NULL,
  `banner_bg` varchar(255) DEFAULT NULL,
  `video_bg` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `noidung` text DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `media`
--

INSERT INTO `media` (`id`, `key_word`, `meta_des`, `banner_bg`, `video_bg`, `link`, `noidung`, `type_id`, `createdAt`, `updatedAt`) VALUES
(1, 'dsd', 'ádasd', 'home-1707044810134.jpeg', 'bg-video-sk-1707044813216.jpg', 'https://www.youtube.com/watch?v=4YWeFB7cuoM', '<h1 style=\"text-align: center;\"><span style=\"color: rgb(224, 62, 45);\">Quay phim hcm</span></h1>\n<p>Ch&iacute;nh v&igrave; vậy, c&aacute;c doanh nghiệp, tổ chức hay c&aacute; nh&acirc;n ng&agrave;y c&agrave;ng ch&uacute; trọng đầu tư hơn về mặt nội dung cho c&aacute;c b&agrave;i viết content, c&aacute;c b&agrave;i chia sẻ, tin tức tr&ecirc;n website, blog, mạng x&atilde; hội, &hellip; nhằm thỏa m&atilde;n nhu cầu t&igrave;m kiếm th&ocirc;ng tin của người d&ugrave;ng. Những b&agrave;i content c&oacute; nội dung chất lượng sẽ gi&uacute;p bạn nổi bật hơn c&aacute;c đối thủ kh&aacute;c trong việc thu h&uacute;t v&agrave; tạo niềm tin cho kh&aacute;ch h&agrave;ng, k&eacute;o theo l&agrave; những lợi &iacute;ch cho doanh nghiệp như l&agrave;m nổi bật nhận diện thương hiệu, tăng lượng kh&aacute;ch h&agrave;ng tiềm năng, tăng doanh số b&aacute;n h&agrave;ng, &hellip;</p>\n<p>Tuy nhi&ecirc;n việc viết content hay, đồng thời đảm bảo c&aacute;c ti&ecirc;u ch&iacute; chuẩn SEO, th&acirc;n thiện với c&aacute;c c&ocirc;ng cụ t&igrave;m kiếm điển h&igrave;nh l&agrave; google v&agrave; nội dung chất lượng thu h&uacute;t người d&ugrave;ng th&igrave; kh&ocirc;ng phải ai cũng l&agrave;m được. Mặt kh&aacute;c, việc tự x&acirc;y dựng một bộ phận content marketing ri&ecirc;ng trong doanh nghiệp l&agrave; kh&aacute; tốn thời gian, c&ocirc;ng sức cũng như chi ph&iacute; vận h&agrave;nh m&agrave; chưa chắc đạt được kết quả mong muốn. Ch&iacute;nh v&igrave; vậy,&nbsp;<strong>dịch vụ content</strong>&nbsp;thu&ecirc; ngo&agrave;i được xem như l&agrave; sự lựa chọn tối ưu, hợp l&yacute; v&agrave; đang dần trở th&agrave;nh xu hướng hiện nay được nhiều đơn vị, tổ chức v&agrave; c&aacute; nh&acirc;n lựa chọn.</p>\n<p><img src=\"http://localhost:8080/images/baiviet/home-video-1706866999711.jpg\" alt=\"home-video.jpg\" width=\"1000\" height=\"auto\"></p>', 1, '2024-02-02 09:41:27', '2024-02-04 11:06:56'),
(2, 'vsdf', 'dfsf', 'home-1707106197031.jpeg', 'banner-thong-ke-1707044825745.jpeg', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', '<p>Ch&iacute;nh v&igrave; vậy, c&aacute;c doanh nghiệp, tổ chức hay c&aacute; nh&acirc;n ng&agrave;y c&agrave;ng ch&uacute; trọng đầu tư hơn về mặt nội dung cho c&aacute;c b&agrave;i viết content, c&aacute;c b&agrave;i chia sẻ, tin tức tr&ecirc;n website, blog, mạng x&atilde; hội, &hellip; nhằm thỏa m&atilde;n nhu cầu t&igrave;m kiếm th&ocirc;ng tin của người d&ugrave;ng. Những b&agrave;i content c&oacute; nội dung chất lượng sẽ gi&uacute;p bạn nổi bật hơn c&aacute;c đối thủ kh&aacute;c trong việc thu h&uacute;t v&agrave; tạo niềm tin cho kh&aacute;ch h&agrave;ng, k&eacute;o theo l&agrave; những lợi &iacute;ch cho doanh nghiệp như l&agrave;m nổi bật nhận diện thương hiệu, tăng lượng kh&aacute;ch h&agrave;ng tiềm năng, tăng doanh số b&aacute;n h&agrave;ng, &hellip;</p>\n<p>Tuy nhi&ecirc;n việc viết content hay, đồng thời đảm bảo c&aacute;c ti&ecirc;u ch&iacute; chuẩn SEO, th&acirc;n thiện với c&aacute;c c&ocirc;ng cụ t&igrave;m kiếm điển h&igrave;nh l&agrave; google v&agrave; nội dung chất lượng thu h&uacute;t người d&ugrave;ng th&igrave; kh&ocirc;ng phải ai cũng l&agrave;m được. Mặt kh&aacute;c, việc tự x&acirc;y dựng một bộ phận content marketing ri&ecirc;ng trong doanh nghiệp l&agrave; kh&aacute; tốn thời gian, c&ocirc;ng sức cũng như chi ph&iacute; vận h&agrave;nh m&agrave; chưa chắc đạt được kết quả mong muốn. Ch&iacute;nh v&igrave; vậy,&nbsp;<strong>dịch vụ content</strong>&nbsp;thu&ecirc; ngo&agrave;i được xem như l&agrave; sự lựa chọn tối ưu, hợp l&yacute; v&agrave; đang dần trở th&agrave;nh xu hướng hiện nay được nhiều đơn vị, tổ chức v&agrave; c&aacute; nh&acirc;n lựa chọn.</p>', 2, '2024-02-02 16:41:47', '2024-02-05 04:09:57'),
(3, 'vxv', 'fdsf', 'home-1707044833658.jpeg', '1700297631-social-media-marketing-1707044837235.jpg', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', '<p>Ch&iacute;nh v&igrave; vậy, c&aacute;c doanh nghiệp, tổ chức hay c&aacute; nh&acirc;n ng&agrave;y c&agrave;ng ch&uacute; trọng đầu tư hơn về mặt nội dung cho c&aacute;c b&agrave;i viết content, c&aacute;c b&agrave;i chia sẻ, tin tức tr&ecirc;n website, blog, mạng x&atilde; hội, &hellip; nhằm thỏa m&atilde;n nhu cầu t&igrave;m kiếm th&ocirc;ng tin của người d&ugrave;ng. Những b&agrave;i content c&oacute; nội dung chất lượng sẽ gi&uacute;p bạn nổi bật hơn c&aacute;c đối thủ kh&aacute;c trong việc thu h&uacute;t v&agrave; tạo niềm tin cho kh&aacute;ch h&agrave;ng, k&eacute;o theo l&agrave; những lợi &iacute;ch cho doanh nghiệp như l&agrave;m nổi bật nhận diện thương hiệu, tăng lượng kh&aacute;ch h&agrave;ng tiềm năng, tăng doanh số b&aacute;n h&agrave;ng, &hellip;</p>\n<p>Tuy nhi&ecirc;n việc viết content hay, đồng thời đảm bảo c&aacute;c ti&ecirc;u ch&iacute; chuẩn SEO, th&acirc;n thiện với c&aacute;c c&ocirc;ng cụ t&igrave;m kiếm điển h&igrave;nh l&agrave; google v&agrave; nội dung chất lượng thu h&uacute;t người d&ugrave;ng th&igrave; kh&ocirc;ng phải ai cũng l&agrave;m được. Mặt kh&aacute;c, việc tự x&acirc;y dựng một bộ phận content marketing ri&ecirc;ng trong doanh nghiệp l&agrave; kh&aacute; tốn thời gian, c&ocirc;ng sức cũng như chi ph&iacute; vận h&agrave;nh m&agrave; chưa chắc đạt được kết quả mong muốn. Ch&iacute;nh v&igrave; vậy,&nbsp;<strong>dịch vụ content</strong>&nbsp;thu&ecirc; ngo&agrave;i được xem như l&agrave; sự lựa chọn tối ưu, hợp l&yacute; v&agrave; đang dần trở th&agrave;nh xu hướng hiện nay được nhiều đơn vị, tổ chức v&agrave; c&aacute; nh&acirc;n lựa chọn.</p>', 3, '2024-02-02 16:41:56', '2024-02-05 04:22:30'),
(4, 'key tiktok', 'ferer', 'home-1707044862454.jpeg', 'gfdgfdgf-1707044874552.png', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', '<h3 id=\"bang-gia-dich-vu-content-facebook-fanpage-mang-xa-hoi\">Bảng gi&aacute; dịch vụ content facebook, fanpage, mạng x&atilde; hội&hellip;</h3>\n<p>Mạng x&atilde; hội đ&atilde; thay đổi cuộc sống của ch&uacute;ng ta như thế n&agrave;o th&igrave; chắc hẳn mọi người ai cũng đều biết. Những b&agrave;i viết đăng l&ecirc;n mạng x&atilde; hội lu&ocirc;n c&oacute; sự lan tỏa nhanh với độ phủ rộng. Ch&iacute;nh v&igrave; vậy, một b&agrave;i content mạng x&atilde; hội chất lượng, thu h&uacute;t, lan tỏa v&agrave; hơn hết l&agrave; &ldquo;g&atilde;i đ&uacute;ng chỗ ngứa&rdquo; của kh&aacute;ch h&agrave;ng sẽ gi&uacute;p tăng doanh số b&aacute;n h&agrave;ng v&agrave; ph&aacute;t triển thương hiệu doanh nghiệp một c&aacute;ch nhanh ch&oacute;ng.</p>\n<p>Để sở hữu những b&agrave;i&nbsp;<a href=\"https://vnwings.net/dich-vu-content/#content-social\" target=\"_blank\" rel=\"noopener\"><strong>content mạng x&atilde; hội</strong></a>, b&agrave;i đăng&nbsp;<a href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"nofollow noopener\">facebook</a>, fanpage,&nbsp;<a href=\"https://www.instagram.com/\" target=\"_blank\" rel=\"nofollow noopener\">instagram</a>, &hellip; thu h&uacute;t v&agrave; chất lượng với độ chuyển đổi cao, VNWings cung cấp tới qu&yacute; kh&aacute;ch g&oacute;i dịch vụ content mạng x&atilde; hội với chất lượng v&agrave; bảng gi&aacute; hợp l&yacute; nhất:</p>\n<p><img src=\"http://localhost:8080/images/baiviet/1700297631-social-media-marketing-1707115585427.jpg\" alt=\"1700297631-social-media-marketing.jpg\" width=\"800\" height=\"400\"></p>', 4, '2024-02-02 16:42:07', '2024-02-05 06:47:05'),
(5, 'vxcv', 'vxcv', 'home-1707044882638.jpeg', 'home-video-1707044888207.jpg', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', '<h3 id=\"bang-gia-dich-vu-content-facebook-fanpage-mang-xa-hoi\">Bảng gi&aacute; dịch vụ content facebook, fanpage, mạng x&atilde; hội&hellip;</h3>\n<p>Mạng x&atilde; hội đ&atilde; thay đổi cuộc sống của ch&uacute;ng ta như thế n&agrave;o th&igrave; chắc hẳn mọi người ai cũng đều biết. Những b&agrave;i viết đăng l&ecirc;n mạng x&atilde; hội lu&ocirc;n c&oacute; sự lan tỏa nhanh với độ phủ rộng. Ch&iacute;nh v&igrave; vậy, một b&agrave;i content mạng x&atilde; hội chất lượng, thu h&uacute;t, lan tỏa v&agrave; hơn hết l&agrave; &ldquo;g&atilde;i đ&uacute;ng chỗ ngứa&rdquo; của kh&aacute;ch h&agrave;ng sẽ gi&uacute;p tăng doanh số b&aacute;n h&agrave;ng v&agrave; ph&aacute;t triển thương hiệu doanh nghiệp một c&aacute;ch nhanh ch&oacute;ng.</p>\n<p>Để sở hữu những b&agrave;i&nbsp;<a href=\"https://vnwings.net/dich-vu-content/#content-social\" target=\"_blank\" rel=\"noopener\"><strong>content mạng x&atilde; hội</strong></a>, b&agrave;i đăng&nbsp;<a href=\"https://www.facebook.com/\" target=\"_blank\" rel=\"nofollow noopener\">facebook</a>, fanpage,&nbsp;<a href=\"https://www.instagram.com/\" target=\"_blank\" rel=\"nofollow noopener\">instagram</a>, &hellip; thu h&uacute;t v&agrave; chất lượng với độ chuyển đổi cao, VNWings cung cấp tới qu&yacute; kh&aacute;ch g&oacute;i dịch vụ content mạng x&atilde; hội với chất lượng v&agrave; bảng gi&aacute; hợp l&yacute; nhất:</p>\n<p><img src=\"http://localhost:8080/images/baiviet/slide-01-1706867185060.jpg\" alt=\"slide-01.jpg\" width=\"1236\" height=\"695\"></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>', 5, '2024-02-02 16:42:15', '2024-02-04 11:08:10'),
(6, 'vcxv', 'vcxv', 'home-1707044848330.jpeg', 'quay-phim-doanh-nghiep-9-min (1)-1707044853554.jpg', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', '<p>Ch&iacute;nh v&igrave; vậy, c&aacute;c doanh nghiệp, tổ chức hay c&aacute; nh&acirc;n ng&agrave;y c&agrave;ng ch&uacute; trọng đầu tư hơn về mặt nội dung cho c&aacute;c b&agrave;i viết content, c&aacute;c b&agrave;i chia sẻ, tin tức tr&ecirc;n website, blog, mạng x&atilde; hội, &hellip; nhằm thỏa m&atilde;n nhu cầu t&igrave;m kiếm th&ocirc;ng tin của người d&ugrave;ng. Những b&agrave;i content c&oacute; nội dung chất lượng sẽ gi&uacute;p bạn nổi bật hơn c&aacute;c đối thủ kh&aacute;c trong việc thu h&uacute;t v&agrave; tạo niềm tin cho kh&aacute;ch h&agrave;ng, k&eacute;o theo l&agrave; những lợi &iacute;ch cho doanh nghiệp như l&agrave;m nổi bật nhận diện thương hiệu, tăng lượng kh&aacute;ch h&agrave;ng tiềm năng, tăng doanh số b&aacute;n h&agrave;ng, &hellip;</p>\n<p>Tuy nhi&ecirc;n việc viết content hay, đồng thời đảm bảo c&aacute;c ti&ecirc;u ch&iacute; chuẩn SEO, th&acirc;n thiện với c&aacute;c c&ocirc;ng cụ t&igrave;m kiếm điển h&igrave;nh l&agrave; google v&agrave; nội dung chất lượng thu h&uacute;t người d&ugrave;ng th&igrave; kh&ocirc;ng phải ai cũng l&agrave;m được. Mặt kh&aacute;c, việc tự x&acirc;y dựng một bộ phận content marketing ri&ecirc;ng trong doanh nghiệp l&agrave; kh&aacute; tốn thời gian, c&ocirc;ng sức cũng như chi ph&iacute; vận h&agrave;nh m&agrave; chưa chắc đạt được kết quả mong muốn. Ch&iacute;nh v&igrave; vậy,&nbsp;<strong>dịch vụ content</strong>&nbsp;thu&ecirc; ngo&agrave;i được xem như l&agrave; sự lựa chọn tối ưu, hợp l&yacute; v&agrave; đang dần trở th&agrave;nh xu hướng hiện nay được nhiều đơn vị, tổ chức v&agrave; c&aacute; nh&acirc;n lựa chọn.</p>', 6, '2024-02-02 16:42:26', '2024-02-04 11:07:34');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `menu`
--

INSERT INTO `menu` (`id`, `name`, `type_id`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Quay phim hồ chí minh', 1, 1, '2024-02-02 09:41:27', '2024-02-05 06:27:51'),
(2, 'Phim quảng cáo', 1, 1, '2024-02-02 16:41:47', '2024-02-03 20:15:07'),
(3, 'chụp ảnh cưới', 2, 1, '2024-02-02 16:41:56', '2024-02-05 04:24:38'),
(5, 'xây kênh facebook', 3, NULL, '2024-02-02 16:42:15', '2024-02-02 09:42:15'),
(6, 'Chup anh sự kiện', 2, NULL, '2024-02-02 16:42:26', '2024-02-03 20:15:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migrate-admin.js'),
('migrate-baiviet.js'),
('migrate-lienhe.js'),
('migrate-media.js'),
('migrate-menu.js'),
('migrate-trangchu.js'),
('migrate-video-noi-bat.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trangchu`
--

CREATE TABLE `trangchu` (
  `id` int(11) NOT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `meta_des` varchar(255) DEFAULT NULL,
  `banner_bg` varchar(255) DEFAULT NULL,
  `video_bg` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `icon_web` varchar(255) DEFAULT NULL,
  `mota_cty` text DEFAULT NULL,
  `thuonghieu` varchar(255) DEFAULT NULL,
  `bg_thongke` varchar(255) DEFAULT NULL,
  `s1` varchar(255) DEFAULT NULL,
  `s2` varchar(255) DEFAULT NULL,
  `s3` varchar(255) DEFAULT NULL,
  `t1` varchar(255) DEFAULT NULL,
  `t2` varchar(255) DEFAULT NULL,
  `t3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `trangchu`
--

INSERT INTO `trangchu` (`id`, `key_word`, `meta_des`, `banner_bg`, `video_bg`, `link`, `logo`, `icon_web`, `mota_cty`, `thuonghieu`, `bg_thongke`, `s1`, `s2`, `s3`, `t1`, `t2`, `t3`, `createdAt`, `updatedAt`) VALUES
(1, 'Thiết kế quảng cáo, thiết kế logo, thiết kế giao diện website, thiết kế thương hiệu, thiết kế namecard, Xây dựng kế hoạch marketing Online, Truyền thông thương hiệu, quản trị nội dung, dựng video marketing, thiết kế giang hàng hội chợ, thiết kế giang hàng', 'TM Branding | Truyền thông thương hiệu, thiết kế quảng cáo, Digital Marketing online\nTM Branding | Pr, Graphic Design, Digital Marketing online. TM Branding | Tư vấn & định hướng truyền thông, thiết kế và giải pháp tổng thể Digital Marketing cho doanh ngh', 'home-1707044750926.jpeg', 'home-video-1707044753455.jpg', 'https://www.youtube.com/watch?v=dJ30OQ7EsPk', 'logotmbrandingvietnam03-16071017417-1707044766049.png', 'icotmbranding-16072604320-1707044768815.png', '<p>Trong mọi mặt của cuộc sống, c&ocirc;ng việc, kinh doanh hay khởi nghiệp, ch&uacute;ng ta lu&ocirc;n cần một điểm tựa như thế. V&agrave; điểm tựa m&agrave; c&oacute; thể khiến cho một thương hiệu &ldquo;trường tồn&rdquo; đ&oacute; ch&iacute;nh l&agrave; niềm tin.</p>\n<p>Ch&iacute;nh v&igrave; vậy, TM ra đời với mong muốn trở th&agrave;nh một phần &ldquo;điểm tựa&rdquo;, đồng h&agrave;nh để &ldquo;giữ lửa&rdquo; v&agrave; &ldquo;giữ hồn&rdquo; cho thương hiệu của bạn. Khi bạn đặt niềm tin ở TM, bạn sẽ nhận lại được nhiều hơn thế, đ&uacute;ng với t&ecirc;n gọi:<strong>&nbsp;TM: Trust &amp; More.&nbsp;</strong></p>', 'doi-tac-tieu-bieu-1707044786430.png', 'banner ewr-1707108912946.jpg', '98% DỰ ÁN HIỆU QUẢ', '300+ DỰ ÁN VIDEO', '10+ NĂM KINH NGHIỆP', ' Khách Hàng phản hồi  hài lòng dịch vụ của chúng tôi.', 'Video được thực hiện Rất nhiều BST hình ảnh xuất bản', 'Chúng tôi tự tin mang lại cho bạn những sản phẩm hiệu quả.', '2024-02-02 03:33:12', '2024-02-05 04:55:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `video_noi_bat`
--

CREATE TABLE `video_noi_bat` (
  `id` int(11) NOT NULL,
  `video_bg` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `video_noi_bat`
--

INSERT INTO `video_noi_bat` (`id`, `video_bg`, `link`, `name`, `type_id`, `createdAt`, `updatedAt`) VALUES
(5, 'tyt-1707045393473.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'vcxbvcb', 1, '2024-02-02 09:43:35', '2024-02-04 11:16:36'),
(6, 'tyt-1707045402597.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'ưqeqwe', 1, '2024-02-02 09:45:55', '2024-02-04 11:16:44'),
(7, 'tyt-1707045411663.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'đâsd', 1, '2024-02-02 09:48:05', '2024-02-04 11:16:53'),
(8, 'tyt-1707045424068.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'vxcv', 1, '2024-02-02 09:48:17', '2024-02-04 11:17:05'),
(9, 'tyt-1707045434362.jpg', 'https://www.youtube.com/watch?v=qdSkrOCYKDY', 'vcxhttps://www.youtube.com/watch?v=qdSkrOCYKDY', 1, '2024-02-02 09:48:56', '2024-02-04 11:17:15'),
(10, 'quay-phim-doanh-nghiep-9-min (1)-1707045457701.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'Ý Nghĩa Của Màu Sắc Trong Tà Áo Dài Có Thể Bạn Chưa Biết?', 2, '2024-02-02 09:43:35', '2024-02-05 04:38:57'),
(11, 'tyt-1707045440771.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'ưqeqwe', 1, '2024-02-02 09:45:55', '2024-02-04 11:17:22'),
(12, 'quay-phim-doanh-nghiep-9-min (1)-1707045463707.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'Top Ý Tưởng Chụp Ảnh Kỷ Yếu Đẹp Tại Trường Học', 2, '2024-02-02 09:48:05', '2024-02-05 04:38:37'),
(13, 'quay-phim-doanh-nghiep-9-min (1)-1707045470412.jpg', 'https://www.youtube.com/watch?v=AMivcP--tFI', 'Top Concept Kỷ Yếu Dạ Hội Quý Phái | Cộng Studio', 2, '2024-02-02 09:48:17', '2024-02-05 04:40:25'),
(14, 'quay-phim-doanh-nghiep-9-min (1)-1707045476801.jpg', 'https://www.youtube.com/watch?v=qdSkrOCYKDY', 'Concept chụp ảnh cưới lãng mạn kiểu Hàn Quốc', 2, '2024-02-02 09:48:56', '2024-02-05 04:37:46'),
(15, '1700297631-social-media-marketing-1707106977321.jpg', 'https://www.youtube.com/watch?v=r1OtnOs-utU', 'su kien ca nhac', 3, '2024-02-05 11:22:59', '2024-02-05 04:22:59'),
(16, '1700297631-social-media-marketing-1707107011098.jpg', 'https://www.youtube.com/watch?v=r1OtnOs-utU', 'su kien tiec cuoi', 3, '2024-02-05 11:23:34', '2024-02-05 04:23:34'),
(17, '1700297631-social-media-marketing-1707106977321.jpg', 'https://www.youtube.com/watch?v=r1OtnOs-utU', 'su kien ca nhac', 3, '2024-02-05 11:22:59', '2024-02-05 04:22:59'),
(18, '1700297631-social-media-marketing-1707107011098.jpg', 'https://www.youtube.com/watch?v=r1OtnOs-utU', 'su kien tiec cuoi', 3, '2024-02-05 11:23:34', '2024-02-05 04:23:34');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `trangchu`
--
ALTER TABLE `trangchu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `video_noi_bat`
--
ALTER TABLE `video_noi_bat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `trangchu`
--
ALTER TABLE `trangchu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `video_noi_bat`
--
ALTER TABLE `video_noi_bat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
