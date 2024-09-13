import qrcode
import os

def generate_qr_code(data, badge_id):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )




    
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    directory = os.path.join(os.path.dirname(__file__), 'qrcodes')
    os.makedirs(directory, exist_ok=True)
    filename = f'badge_{badge_id}.png'
    path = os.path.join(directory, filename)

 
    img.save(path)
    # return f'backend/qrcodes/{filename}'  
    return f'qrcodes/{filename}'
