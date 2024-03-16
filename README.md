it64a-tkweb

1. Các file html để trong folder templates:
  Đặt tên theo phần trang đảm nhiệm, đặt tên tiếng anh ngắn gọn dễ hiểu, VD: Dương nhận khách sạn -> file html chính tên hotel, các trang con có thể để hotel1,hotel2...
  Đặt tên theo 1 quy tắc nhất định, tránh đặt tuỳ hứng gây khó khăn cho việc refactor code và link đường dẫn file

2. File css để trong assets/css:
  Css cho file html nào thì đặt tên y hệt file html đấy, VD: File html tên hotel1.html -> file css của file đấy cũng đặt tên hotel1.html   
  CÓ THỂ LÀM HOẶC KHÔNG.
  KHUYẾN KHÍCH cài đặt NodeJs và SCSS để làm css gọn và dễ nhìn hơn, nếu thấy khó quá có thể dùng css thuần

3. File ảnh để trong img:
   Trừ những file ảnh dùng chung cho toàn bộ trang web, còn lại những ảnh dùng cho những trang nhất định như khách sạn, tours để riêng vào 1 folder có tên giống với tên trang chính, VD: Các ảnh của trang tours để vào 1     folder đặt tên là tours

4. File icon để trong assets/fonts:
  Bộ icon chính sử dụng của FontAwesome:
  Cách link vào trong file html:
  Copy phần này vào trong thẻ head của html (thẻ head nằm bên dưới dòng DOCTYPE và bên trên thẻ body, không phải thẻ header)
  "<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />"
  Tìm kiếm icon bằng cách vào web https://glyphsearch.com/?library=font-awesome và tìm tên icon, web sẽ tự lưu tên thẻ <i></i> vào bảng nhớ, sau đó paste vào file html đang làm việc là được
