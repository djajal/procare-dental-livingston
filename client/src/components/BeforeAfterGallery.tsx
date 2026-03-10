import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeAfterPair {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

interface BeforeAfterGalleryProps {
  pairs: BeforeAfterPair[];
}

export function BeforeAfterGallery({ pairs }: BeforeAfterGalleryProps) {
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>(
    pairs.reduce((acc, pair) => ({ ...acc, [pair.id]: 50 }), {})
  );

  const handleSliderChange = (id: string, position: number) => {
    setSliderPositions(prev => ({ ...prev, [id]: position }));
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {pairs.map(pair => (
          <Card key={pair.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary px-4 pt-4">{pair.title}</h3>
                
                {/* Before/After Slider */}
                <div className="relative w-full h-80 overflow-hidden bg-gray-200 rounded-lg mx-4 mb-4">
                  {/* After Image (Background) */}
                  <img
                    src={pair.afterImage}
                    alt={pair.afterAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before Image (Overlay) */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ width: `${sliderPositions[pair.id]}%` }}
                  >
                    <img
                      src={pair.beforeImage}
                      alt={pair.beforeAlt}
                      className="w-full h-full object-cover"
                      style={{ width: `${100 / (sliderPositions[pair.id] / 100)}%` }}
                    />
                  </div>

                  {/* Slider Handle */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions[pair.id]}
                    onChange={e => handleSliderChange(pair.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                  />

                  {/* Visual Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                    style={{ left: `${sliderPositions[pair.id]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                      <div className="flex gap-1">
                        <div className="w-0.5 h-4 bg-primary"></div>
                        <div className="w-0.5 h-4 bg-primary"></div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>

                <p className="text-sm text-foreground/70 px-4 pb-4">
                  Drag the slider to compare results
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
