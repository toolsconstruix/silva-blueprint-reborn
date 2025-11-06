import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Margaret C",
    text: "Silva's Contracting team did an excellent job on my deck. It was a real surprise and a pleasure to see how quick, clean and easy the work went. The team exceeded my expectations, and I would recommend them to anyone.",
    rating: 5,
  },
  {
    name: "Henry Anderson",
    text: "Thanks so much for the experience! We can always trust that Silva's knows what they're doing. I'd like to thank them again. They really outdid themselves. Thank you, Henry Anderson!",
    rating: 5,
  },
  {
    name: "Casey Gomez",
    text: "I'd be more than happy to contact them in case we'd need carpenters. Our kids like them, and we don't need to worry about anything. I'd definitely say of needing a specific job, I'd immediately think about hiring this company.",
    rating: 5,
  },
];

const ReviewsV2 = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="text-primary/20 mb-4" size={48} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {review.text}
                </p>
                
                <div className="pt-4 border-t">
                  <p className="font-semibold text-lg">{review.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsV2;
