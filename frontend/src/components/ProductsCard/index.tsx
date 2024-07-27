import { IProductProps } from "@/interface/index";
import Image from "next/image";


function ProductsCard({ product }: IProductProps) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
            <div className="p-4 flex items-center justify-center flex-grow">
                <div className="relative w-32 h-32">
                    <Image
                        className="rounded-xl object-cover w-full h-full"
                        src={product.imgUrl}
                        alt={product.name}
                        layout="fill"
                    />
                </div>
            </div>
            <div className="flex flex-col items-start flex-grow p-2">
                <h5 className="text-xl font-bold text-center mb-2 text-white flex-grow">{product.name}</h5>
                <div className="mb-2 space-y-1 flex-grow">
                    <span className="block text-lg text-gray-300 font-semibold">
                        Tipo: <span className="font-normal">{product.type}</span>
                    </span>
                    <span className="block text-lg text-gray-300 font-semibold">
                        Bodega: <span className="font-normal">{product.store}</span>
                    </span>
                    <span className="block text-lg text-gray-300 font-semibold">
                        <span className="font-normal">{`$${product.price}`}</span>
                    </span>
                </div>
                <div className="flex w-full justify-end">
                    <button className="px-4 py-2 bg-[#FFD700] text-[#800020] rounded-lg">Detalles</button>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;