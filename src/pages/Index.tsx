import { HeroSection } from "@/components/HeroSection";
import { EraSection } from "@/components/EraSection";
import { Era1Interactive } from "@/components/Era1Interactive";
import { Era2Interactive } from "@/components/Era2Interactive";
import { Era3Interactive } from "@/components/Era3Interactive";
import { Era4Interactive } from "@/components/Era4Interactive";
import { ConclusionSection } from "@/components/ConclusionSection";

import era1Image from "@/assets/era1-steam.jpg";
import era2Image from "@/assets/era2-electric.jpg";
import era3Image from "@/assets/era3-digital.jpg";
import era4Image from "@/assets/era4-smart.jpg";

const Index = () => {
  return (
    <main className="scroll-smooth">
      <HeroSection />

      <EraSection
        id="era-1"
        era="Cuộc Cách mạng 1.0"
        title="Kỷ nguyên Hơi nước"
        subtitle="1760 - 1840"
        description={[
          "Từ lao động thủ công đến máy móc. Sự xuất hiện của máy hơi nước đã thay đổi hoàn toàn cách thức sản xuất của loài người.",
          "Hai giai cấp mới ra đời: giai cấp tư sản (chủ sở hữu tư liệu sản xuất) và giai cấp vô sản (người lao động bán sức lao động).",
          "Mâu thuẫn giữa tính chất xã hội hóa của sản xuất và chế độ chiếm hữu tư nhân tư bản chủ nghĩa bắt đầu bộc lộ.",
        ]}
        quote="Chính đại công nghiệp đã tạo ra giai cấp vô sản hiện đại"
        quoteAuthor="C. Mác"
        backgroundImage={era1Image}
        gradientClass="era-1-bg"
        accentColor="hsl(25 85% 55%)"
      >
        <Era1Interactive />
      </EraSection>

      <EraSection
        id="era-2"
        era="Cuộc Cách mạng 2.0"
        title="Kỷ nguyên Điện và Thép"
        subtitle="1870 - 1914"
        description={[
          "Sản xuất hàng loạt và dây chuyền tự động ra đời. Điện năng thay thế hơi nước, thép thay thế sắt.",
          "Sự tích tụ và tập trung sản xuất dẫn tới sự hình thành các tập đoàn độc quyền - nền tảng của chủ nghĩa tư bản độc quyền.",
          "Cuộc đua tranh giành thị trường và nguồn nguyên liệu dẫn đến chủ nghĩa đế quốc và các cuộc chiến tranh thế giới.",
        ]}
        backgroundImage={era2Image}
        gradientClass="era-2-bg"
        accentColor="hsl(45 100% 60%)"
      >
        <Era2Interactive />
      </EraSection>

      <EraSection
        id="era-3"
        era="Cuộc Cách mạng 3.0"
        title="Kỷ nguyên Số"
        subtitle="1960 - 2010"
        description={[
          "Công nghệ thông tin và tự động hóa bùng nổ. Máy tính, internet và điện tử số đã tạo ra một cuộc cách mạng trong quản lý, truyền thông và sản xuất.",
          "Lao động trí óc trở thành động lực chính. Tri thức và thông tin trở thành tài sản quan trọng nhất.",
          "Toàn cầu hóa mở rộng chưa từng có - tạo cơ hội phát triển mới nhưng cũng gia tăng bất bình đẳng giữa các quốc gia.",
        ]}
        backgroundImage={era3Image}
        gradientClass="era-3-bg"
        accentColor="hsl(150 100% 50%)"
      >
        <Era3Interactive />
      </EraSection>

      <EraSection
        id="era-4"
        era="Cuộc Cách mạng 4.0"
        title="Kỷ nguyên Thông minh"
        subtitle="2010 - Hiện tại"
        description={[
          "AI, IoT, Big Data - những trụ cột của thế giới thông minh. Máy móc không chỉ tự động mà còn có khả năng học hỏi và ra quyết định.",
          "Thách thức: Bất bình đẳng gia tăng, thất nghiệp công nghệ, vấn đề đạo đức và quyền riêng tư trong thời đại dữ liệu lớn.",
          "Cơ hội cho Việt Nam: Nguồn nhân lực trẻ và năng động, thể chế đang hoàn thiện, hạ tầng số đang được đầu tư mạnh mẽ.",
        ]}
        backgroundImage={era4Image}
        gradientClass="era-4-bg"
        accentColor="hsl(280 100% 65%)"
      >
        <Era4Interactive />
      </EraSection>

      <ConclusionSection />
    </main>
  );
};

export default Index;
