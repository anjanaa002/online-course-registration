const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET);

exports.createPayment = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "inr",
        product_data: { name: req.body.title },
        unit_amount: req.body.price * 100
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/"
  });

  res.json({ id: session.id });
};
