import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h2>
          <p className="text-xl text-muted-foreground">
            What Our Customers Say About Us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-primary">— {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
