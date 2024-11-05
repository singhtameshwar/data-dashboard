import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black">

      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 text-2xl font-bold">D</span>
          <span className="text-xl">ashboard</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-black" href="#">
            SERVICES
          </Link>
          <Link className="text-black" href="#">
            ABOUT US
          </Link>
          <Link className="text-black" href="#">
            CASES
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-black">
              SIGN UP
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="icon" className="rounded-full border border-gray-700">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl font-bold leading-tight mb-8">
                We Make
                <br />
                Awesome
                <br />
                Website
              </h1>
              <div className="flex -space-x-4">
                <Image
                  src="/images/homepageimg/home-img-1-min.webp.avif"
                  alt="Team member"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-black"
                />
                <Image
                  src="/images/homepageimg/home-img-2-min.avif"
                  alt="Team member"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-black"
                />
                <Image
                  src="/images/homepageimg/home-img-3-min.avif"
                  alt="Team member"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-black"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl">CLOVEODE TECHNOLOGIES</h2>
              <h3 className="text-xl">WE PROVIDE  SOLUTIONS ACCORDING TO YOUR NEED</h3>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" className="rounded-full">
                <Link href="/dashboard" className="flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  Let's See How We Did It
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start rounded-full">
                WEB ANALYTICS
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-full">
                EMAIL MARKETING
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-full">
                SEO 2.0
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-purple-300 p-8 rounded-3xl">
              <div className="space-y-4">
                <h3 className="text-black text-2xl font-bold">YOUR BUSINESS BOOST</h3>
                <Button className="bg-black text-white rounded-full hover:bg-gray-900">
                  Book Demo Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-orange-500 p-6 rounded-3xl">
                <h3 className="text-xl mb-4">BUSINESS SOLUTIONS</h3>
                <HoverCard>
                  <HoverCardTrigger><div className="w-12 h-12 bg-black rounded-full" /></HoverCardTrigger>
                  <HoverCardContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium.
                  </HoverCardContent>
                </HoverCard>
              </Card>
              <Card className="bg-gray-200 p-6 rounded-3xl">
                <h3 className="text-black text-xl">OUR CASE STUDIES</h3>
                <HoverCard>
                  <HoverCardTrigger><ArrowRight className="h-10 w-10 text-black mt-4" /></HoverCardTrigger>
                  <HoverCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita.
                  </HoverCardContent>
                </HoverCard>
              </Card>
              <Card className="bg-yellow-300 p-6 rounded-3xl">
                <h3 className="text-black text-xl">SUCCESSFUL PROJECTS</h3>
                <HoverCard>
                  <HoverCardTrigger><p className="text-black text-4xl font-bold mt-4">700+</p></HoverCardTrigger>
                  <HoverCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quia.
                  </HoverCardContent>
                </HoverCard>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}