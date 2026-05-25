import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <div className="mb-16 flex flex-col mt-2">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-bone mb-4">
        Contact Us
      </h2>

      <Card className="rounded-2xl h-fit">
        <CardContent className="pt-6 md:pt-4">
          <div className="w-full h-fit flex flex-col">
            <div className="flex flex-col w-full md:flex-row p-0 md:items-start md:gap-6">
              <div className="flex flex-col shrink gap-2 md:py-4 md:min-w-64">
                <p className="text-base md:text-lg font-normal text-slate-600 dark:text-bone/80 mb-2">
                  Reach out directly, or fill out an inquiry form and we&apos;ll be in touch!
                </p>
                <div className="flex flex-row items-center gap-2">
                  <Phone className="stroke-black h-4 w-4 shrink-0 dark:stroke-bone" />
                  <Link href="tel:+19196765505,25">
                    <p className="text-sm md:text-base font-normal text-slate-700 dark:text-bone/90">
                      (919) 676-5505 ext. 25
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 stroke-black dark:stroke-bone" />
                  <Link href="mailto:general@productionpaintingonline.com">
                    <p className="text-sm md:text-base font-normal text-slate-700 dark:text-bone/90">
                      General@productionpaintingonline.com
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-start gap-2 mb-6">
                  <MapPin className="h-4 w-4 shrink-0 stroke-black mt-0.5 dark:stroke-bone" />
                  <Link
                    href="https://maps.apple.com/?address=Capital%20Blvd,%20Raleigh,%20NC%20%2027616,%20United%20States&ll=35.861288,-78.581867&q=Capital%20Blvd&t=m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm md:text-base font-normal text-slate-700 dark:text-bone/90">
                      8411 Garvey Drive, Suite 105
                      <br />
                      Raleigh, NC
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex w-full h-48 md:h-72 lg:h-80 overflow-hidden rounded-lg drop-shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.167256058847!2d-78.57135208255609!3d35.89437430000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac57547ab9ada1%3A0xf789b203a73238bf!2sProduction%20Painting%20%26%20Decorating!5e1!3m2!1sen!2sus!4v1757026837546!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <Link href="/inquiry" className="w-full mt-4">
              <Button className="flex flex-row w-full p-6 items-center text-base md:text-lg rounded-lg">
                Get started on an inquiry
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
