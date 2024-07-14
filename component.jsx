/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DUTXM824sxO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Turf Booking
        </Link>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Turfs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Reviews
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Book Your Turf Now
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground mb-8">
                  Find and book the perfect turf for your next game.
                </p>
                <form className="flex gap-2">
                  <Input type="text" placeholder="Search by location or sport" className="flex-1" />
                  <Button type="submit" variant="secondary">
                    Search
                  </Button>
                </form>
              </div>
              <div>
                <img src="/placeholder.svg" width={600} height={400} alt="Turf" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Available Turfs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Turf 1"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Turf 1</h3>
                  <p className="text-muted-foreground mb-4">5-a-side football pitch</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">$50/hr</div>
                    <Button variant="secondary" size="sm">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Turf 2"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Turf 2</h3>
                  <p className="text-muted-foreground mb-4">7-a-side football pitch</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">$60/hr</div>
                    <Button variant="secondary" size="sm">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Turf 3"
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Turf 3</h3>
                  <p className="text-muted-foreground mb-4">Basketball court</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">$45/hr</div>
                    <Button variant="secondary" size="sm">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Book Your Turf</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Turf 1</h3>
                      <p className="text-muted-foreground">5-a-side football pitch</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2">Availability</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm">
                          10:00 AM
                        </Button>
                        <Button variant="outline" size="sm">
                          11:00 AM
                        </Button>
                        <Button variant="outline" size="sm">
                          12:00 PM
                        </Button>
                        <Button variant="outline" size="sm">
                          1:00 PM
                        </Button>
                        <Button variant="outline" size="sm">
                          2:00 PM
                        </Button>
                        <Button variant="outline" size="sm">
                          3:00 PM
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Pricing</h4>
                      <p className="text-2xl font-bold">$50/hr</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="date">Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="justify-between">
                              <span>Select date</span>
                              <ChevronDownIcon className="w-4 h-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0">
                            <Calendar />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="time">Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 hour</SelectItem>
                            <SelectItem value="2">2 hours</SelectItem>
                            <SelectItem value="3">3 hours</SelectItem>
                            <SelectItem value="4">4 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full">
                        Book Now
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">John Doe</h4>
                      <p className="text-muted-foreground">5-a-side player</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The turf at Turf 1 is in great condition and the booking\n process was super easy. Highly
                    recommend!"
                  </p>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">Jane Appleseed</h4>
                      <p className="text-muted-foreground">Basketball player</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The basketball court at Turf 3 is well-maintained and the\n lighting is great for evening games.
                    I'll be booking again!"
                  </p>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">Sarah Miller</h4>
                      <p className="text-muted-foreground">7-a-side player</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The booking process for Turf 2 was super easy and the staff\n was very helpful. I'll definitely be
                    back!"
                  </p>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Have a question or need help booking your turf? Get in touch with us and we'll be happy to assist.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p>+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MailIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p>info@turfbooking.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}