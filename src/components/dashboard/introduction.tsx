import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Plane, Hotel, MapPin } from "lucide-react"
import Link from "next/link"

export function Introduction() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover New Horizons, Protect Our Earth
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Travel with purpose and reduce your ecological impact. At EcoVoyage, every trip is a step toward a better future.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Begin Your Adventure</Button>
                <Button variant="outline">Find Out More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Plane className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Low-Impact Travel</h2>
                <p className="text-center text-gray-600">
                  Partnering with eco-conscious airlines and transit services to cut down emissions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Hotel className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Eco-Conscious Stays</h2>
                <p className="text-center text-gray-600">
                  Stay at green-certified hotels committed to local sustainability efforts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <MapPin className="h-10 w-10 text-blue-600" />
                <h2 className="text-xl font-bold">Mindful Adventures</h2>
                <p className="text-center text-gray-600">
                  Engage in activities that protect wildlife and honor cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Connect with EcoVoyage</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join our newsletter for sustainable travel tips, exclusive offers, and environmental news.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Your email address"
                    type="email"
                    required
                    aria-label="Email for newsletter"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-600">
                  By signing up, you accept our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2024 EcoVoyage. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
