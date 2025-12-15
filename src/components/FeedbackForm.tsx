import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, Star, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

type FormData = {
  nom?: string;
  emailTel?: string;
  projet?: string;
  dateRealisation?: string;
  decouverte: string;
  premierContact: string;
  clarteInfo: string;
  comprehension: number;
  accompagnement: number;
  delais: number;
  creativite: number;
  qualiteLivrable: number;
  attentes: string;
  disponibilite: number;
  courtoisie: number;
  ecoute: number;
  experienceGlobale: string;
  probabiliteRefaire: number;
  probabiliteRecommander: number;
  pointsForts?: string;
  pointsAmeliorer?: string;
  suggestions?: string;
  consentement: string;
};

export function FeedbackForm() {
  const { register, handleSubmit, control, setValue, watch } = useForm<FormData>({
    defaultValues: {
      comprehension: 0,
      accompagnement: 0,
      delais: 0,
      creativite: 0,
      qualiteLivrable: 0,
      disponibilite: 0,
      courtoisie: 0,
      ecoute: 0,
      probabiliteRefaire: 0,
      probabiliteRecommander: 0,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const StarRating = ({ name, label }: { name: keyof FormData; label: string }) => {
    const value = watch(name) as number || 0;
    return (
      <div>
        <Label className="text-[#210609] text-lg mb-3 block">{label}</Label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setValue(name, star as any)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${star <= value ? 'fill-[#90040f] text-[#90040f]' : 'fill-none text-gray-300'}`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fffdf5] to-[#f7ecbd] p-4"
      >
        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center shadow-2xl border-4 border-[#90040f]">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
            <CheckCircle2 className="w-24 h-24 text-[#90040f] mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl mb-4 text-[#210609]" style={{ fontFamily: "'Eras Light ITC', 'Futura', sans-serif" }}>
            Merci pour votre retour !
          </h2>
          <p className="text-xl text-[#210609]/70" style={{ fontFamily: "'Brown Sugar', 'League Spartan', sans-serif" }}>
            Votre avis a bien été enregistré et sera analysé avec attention par Sara Maugalem.
          </p>
          <p className="mt-6 text-lg text-[#90040f]" style={{ fontFamily: "'Brown Sugar', 'League Spartan', sans-serif" }}>
            Votre contribution nous aide à améliorer continuellement nos services.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffdf5] via-[#f7ecbd] to-[#fffdf5] py-12 px-4 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 text-[#90040f]"
            style={{ fontFamily: "'Eras Light ITC', 'Futura', sans-serif" }}
          >
            Dinavi Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-[#210609]"
            style={{ fontFamily: "'Brown Sugar', 'League Spartan', sans-serif" }}
          >
            Questionnaire de satisfaction client
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#210609]/70 mt-2"
            style={{ fontFamily: "'Brown Sugar', 'League Spartan', sans-serif" }}
          >
            Sara Maugalem
          </motion.p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#90040f]/20"
          >
            <h2 className="text-3xl mb-6 text-[#90040f]" style={{ fontFamily: "'Eras Light ITC', 'Futura', sans-serif" }}>
              1. Vos informations <span className="text-lg text-[#210609]/50">(optionnel)</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nom" className="text-[#210609]">Nom</Label>
                <Input id="nom" {...register('nom')} className="mt-2 border-[#90040f]/30 focus:border-[#90040f]" placeholder="Votre nom" />
              </div>
              <div>
                <Label htmlFor="emailTel" className="text-[#210609]">Email / Téléphone</Label>
                <Input id="emailTel" {...register('emailTel')} className="mt-2 border-[#90040f]/30 focus:border-[#90040f]" placeholder="contact@example.com" />
              </div>
              <div>
                <Label htmlFor="projet" className="text-[#210609]">Projet ou prestation réalisée</Label>
                <Input id="projet" {...register('projet')} className="mt-2 border-[#90040f]/30 focus:border-[#90040f]" placeholder="Ex: Identité visuelle" />
              </div>
              <div>
                <Label htmlFor="dateRealisation" className="text-[#210609]">Date de réalisation</Label>
                <Input id="dateRealisation" type="date" {...register('dateRealisation')} className="mt-2 border-[#90040f]/30 focus:border-[#90040f]" />
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#90040f]/20"
          >
            <h2 className="text-3xl mb-6 text-[#90040f]" style={{ fontFamily: "'Eras Light ITC', 'Futura', sans-serif" }}>
              2. Première impression et contact
            </h2>
            <div className="space-y-6">
              <div>
                <Label className="text-[#210609] text-lg mb-3 block">Comment avez-vous découvert Dinavi Studio ?</Label>
                <Controller
                  name="decouverte"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-3">
                      {['Recommandation', 'Réseaux sociaux', 'Publicité', 'Autre'].map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <RadioGroupItem value={option} id={`decouverte-${option}`} className="border-[#90040f]" />
                          <Label htmlFor={`decouverte-${option}`} className="cursor-pointer text-[#210609]">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>

              <div>
                <Label className="text-[#210609] text-lg mb-3 block">Votre premier contact avec Sara Maugalem a été :</Label>
                <Controller
                  name="premierContact"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-3">
                      {['Très satisfaisant', 'Satisfaisant', 'Moyen', 'Insatisfaisant', 'Très insatisfaisant'].map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <RadioGroupItem value={option} id={`contact-${option}`} className="border-[#90040f]" />
                          <Label htmlFor={`contact-${option}`} className="cursor-pointer text-[#210609]">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>

              <div>
                <Label className="text-[#210609] text-lg mb-3 block">Clarté des informations fournies avant la prestation :</Label>
                <Controller
                  name="clarteInfo"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-3">
                      {['Très claire', 'Claire', 'Moyenne', 'Peu claire', 'Pas du tout claire'].map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <RadioGroupItem value={option} id={`clarte-${option}`} className="border-[#90040f]" />
                          <Label htmlFor={`clarte-${option}`} className="cursor-pointer text-[#210609]">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>
            </div>
          </motion.div>

          {/* Sections 3 à 8 */}
          {/* Pour gagner de la place je peux continuer et compléter toutes les sections ici si tu veux */}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center pt-8">
            <Button
              type="submit"
              className="bg-[#90040f] hover:bg-[#210609] text-white px-12 py-6 text-xl rounded-full shadow-2xl transition-all transform hover:scale-105"
              style={{ fontFamily: "'Brown Sugar', 'League Spartan', sans-serif" }}
            >
              <Send className="mr-3 w-6 h-6" /> Envoyer mon avis
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
