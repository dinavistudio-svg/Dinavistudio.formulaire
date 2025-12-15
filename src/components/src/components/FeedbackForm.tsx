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
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm<FormData>({
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
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const StarRating = ({ name, label }: { name: keyof FormData; label: string }) => {
    const value = watch(name) as number || 0;
    return (
      <div>
        <Label className="text-[#210609] text-lg mb-3 block">{label}</Label>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(star => (
            <button key={star} type="button" onClick={() => setValue(name, star as any)}
                    className="transition-transform hover:scale-110">
              <Star className={`w-8 h-8 ${star <= value ? 'fill-[#90040f] text-[#90040f]' : 'fill-none text-gray-300'}`} />
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fffdf5] to-[#f7ecbd] p-4">
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
      {/* Arrière-plan abstrait */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Sections 1 à 8 ici (pour gagner de la place je ne recopie pas toutes, mais tu les as déjà dans ton code) */}
      </form>
    </div>
  );
}
