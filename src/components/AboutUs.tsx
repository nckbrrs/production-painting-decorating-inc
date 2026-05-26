import {
  BicepsFlexedIcon,
  BuildingIcon,
  FactoryIcon,
  HardHatIcon,
  HotelIcon,
  type LucideIcon,
  UsersIcon,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ContactUs from "./ContactUs";
import StatCardGroup from "./StatCardGroup";
import OSHAIcon from "./icons/OSHA";
import Image from "next/image";
import { cn } from "~/lib/utils";

export default function AboutUs() {
  const iconClass = "w-8 md:w-12 lg:w-14 h-8 md:h-12 lg:h-14 mb-2 lg:mb-4 stroke-slate-500 dark:stroke-slate-400";

  const statsForStatCards = [
    { nounDesc: "Satisfied Clients", valueDesc: "100+", icon: <UsersIcon className={iconClass} /> },
    { nounDesc: "Finished Projects", valueDesc: "1000+", icon: <BuildingIcon className={iconClass} /> },
    { nounDesc: "Years of Experience", valueDesc: "20+", icon: <BicepsFlexedIcon className={iconClass} /> },
    {
      nounDesc: "Certified",
      valueDesc: "OSHA",
      icon: <OSHAIcon className={cn(iconClass, "w-14 h-14 dark:bg-slate-200 rounded-full p-0.5")} />,
    },
    {
      nounDesc: "Certified",
      valueDesc: "MBE",
      icon: (
        <Image
          src="/images/mbe-certification.png"
          alt="MBE Certified"
          width={56}
          height={56}
          className={cn(iconClass, "w-14 h-14 rounded-full p-0.5 object-contain")}
        />
      ),
    },
  ];

  const services = [
    { name: "Commercial Paint", imgSrc: "/STOCK/images/services/commercial-paint.jpg" },
    { name: "Floor Coatings", imgSrc: "/STOCK/images/services/floor-coatings.jpg" },
    { name: "Vinyl Wall Covering and Specialty Coatings", imgSrc: "/STOCK/images/services/vinyl-and-specialty.jpg" },
  ];

  const ourCustomersData: { title: string; subtitle: string; icon: LucideIcon }[] = [
    {
      title: "General Contractors",
      subtitle: "A trade partner you can rely on — from estimating to closeout.",
      icon: HardHatIcon,
    },
    {
      title: "Commercial Property Managers",
      subtitle: "Keep tenants happy and attract new ones with a good-looking building.",
      icon: HotelIcon,
    },
    {
      title: "Facility Managers",
      subtitle: "Maintain your facility in top shape with minimal interference to your customers.",
      icon: FactoryIcon,
    },
    {
      title: "Direct Owners",
      subtitle: "Work directly for individual clients looking for a refresh or general update to their storefront.",
      icon: BuildingIcon,
    },
  ];

  return (
    <div className="h-full mt-10 md:mt-20">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">Our Mission</h2>
        <p className="font-normal text-lg md:text-xl text-slate-700 dark:text-bone/90 leading-relaxed">
          With over 20 years of dedicated service, our mission is to transform commercial &amp; industrial
          spaces into vibrant, enduring environments through expert craftmanship, innovative techniques and
          an unwavering commitment to quality. We strive to exceed client expectations by delivering
          exceptional painting solutions that enhance aesthetics, protect investments, and foster lasting
          partnerships built on trust and reliability.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">Our Accolades</h2>
        <StatCardGroup stats={statsForStatCards} />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">Our Services</h2>
        <div className="flex w-full justify-center items-center">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.name} className="md:basis-1/3">
                  <Card className="rounded-xl overflow-hidden border-0">
                    <CardContent className="flex aspect-square justify-center p-0 m-0 relative">
                      <img src={service.imgSrc} alt={service.name} className="object-cover w-full h-full" />
                      <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black/55">
                        <h4 className="text-xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-semibold text-center w-4/5">
                          {service.name}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:hidden" />
            <CarouselNext className="right-4 md:hidden" />
          </Carousel>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">Our Customers</h2>
        <div className="flex flex-col gap-3">
          {ourCustomersData.map((cust) => (
            <Card key={cust.title}>
              <CardContent className="flex flex-row items-center py-4 md:py-6">
                <cust.icon className="w-10 h-10 md:w-12 md:h-12 shrink-0 mr-4 md:mr-6 stroke-1 dark:stroke-slate-200" />
                <div>
                  <p className="text-lg md:text-xl font-semibold">{cust.title}</p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-normal">
                    {cust.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
